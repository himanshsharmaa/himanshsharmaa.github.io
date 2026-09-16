import { useEffect, useMemo, useRef, useState } from 'react';
// Type definitions for assistant actions and messages
interface AssistantAction {
  label: string;
  href: string;
  external: boolean;
}
interface Message {
  id: number;
  role: 'assistant' | 'user';
  text: string;
  actions?: AssistantAction[];
}
import { FiMessageCircle, FiSend, FiX } from 'react-icons/fi';
import { contactLinks } from '../data/profile';
import { projects } from '../data/projects';
import { skillGroups } from '../data/skills';
import { timelineTabs } from '../data/timeline';

const starterPrompts = [
  'What services does Himansh offer?',
  'Show me featured projects',
  'What is his tech stack?',
  'How can I contact him?',
];

// Enhanced keyword matching with simple fuzzy logic and synonym support
function includesAny(text: string, keywords: string[]): boolean {
  const normalized = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Simple Levenshtein distance for fuzzy matching
  const levenshtein = (a: string, b: string) => {
    const matrix = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        );
      }
    }
    return matrix[a.length][b.length];
  };

  return keywords.some((keyword: string) => {
    const cleanedKeyword = keyword.toLowerCase().trim();
    if (!cleanedKeyword) return false;
    if (cleanedKeyword.includes(' ')) {
      return normalized.includes(cleanedKeyword);
    }
    // Exact word boundary match
    if (new RegExp(`\\b${escapeRegExp(cleanedKeyword)}\\b`).test(normalized)) {
      return true;
    }
    // Fuzzy match with threshold 1 for single word
    const words = normalized.split(' ');
    return words.some((w: string) => levenshtein(w, cleanedKeyword) <= 1);
  });
}

function getTopExperienceItems() {
  const experienceTab = timelineTabs.find((tab) => tab.id === 'experience');

  if (!experienceTab) {
    return [];
  }

  return experienceTab.items.slice(0, 2);
}

function buildAssistantReply(rawInput: string) {
  const input = rawInput.toLowerCase().trim();
  const normalizedInput = input
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const wordCount = normalizedInput ? normalizedInput.split(' ').length : 0;

  if (!input) {
    return {
      text: 'Ask me anything about Himansh: projects, skills, experience, or how to work together.',
    };
  }

  if (wordCount <= 4 && includesAny(normalizedInput, ['hello', 'hi', 'hey'])) {
    return {
      text: 'Hi! I am Himansh\'s portfolio assistant. I can help you explore projects, skills, experience, and contact options.',
    };
  }

  if (includesAny(input, ['service', 'hire', 'work with', 'collaboration', 'freelance'])) {
    return {
      text: 'Himansh works on full-stack product development, AI-powered features, and end-to-end web applications for startups and teams.',
      actions: [
        { label: 'View Projects', href: '#projects', external: false },
        { label: 'Contact Himansh', href: '#contact', external: false },
      ],
    };
  }

  if (includesAny(input, ['project', 'portfolio', 'case study'])) {
    const topProjects = projects.slice(0, 3).map((project) => `- ${project.title}: ${project.subtitle}`).join('\n');

    return {
      text: `Here are featured projects:\n${topProjects}`,
      actions: [
        { label: 'Go To Projects', href: '#projects', external: false },
        { label: 'GitHub Profile', href: contactLinks.github, external: true },
      ],
    };
  }

  // Check for specific project query
  const projectMatch = projects.find((p) => includesAny(p.title, [input]));
  if (projectMatch) {
    return {
      text: `**${projectMatch.title}**\n${projectMatch.description}\n\nStack: ${projectMatch.stack.join(', ')}`,
      actions: [
        { label: 'View Demo', href: projectMatch.demoUrl ?? '#', external: true },
        { label: 'GitHub', href: projectMatch.githubUrl, external: true },
      ],
    };
  }

  if (includesAny(input, ['skill', 'stack', 'technology', 'tech'])) {
    const topGroups = skillGroups
      .slice(0, 3)
      .map((group) => `${group.title}: ${group.items.slice(0, 4).join(', ')}`)
      .join('\n');

    return {
      text: `Core stack overview:\n${topGroups}`,
      actions: [{ label: 'Open Skills', href: '#skills', external: false }],
    };
  }

  if (includesAny(input, ['experience', 'journey', 'education', 'timeline', 'background'])) {
    const highlights = getTopExperienceItems().map((item) => `- ${item.year}: ${item.title} at ${item.company}`).join('\n');

    return {
      text: highlights
        ? `Quick background highlights:\n${highlights}`
        : 'You can find work and education details in the Experience section.',
      actions: [{ label: 'View Experience', href: '#experience', external: false }],
    };
  }

  if (includesAny(input, ['resume', 'cv'])) {
    return {
      text: 'You can view or download Himansh\'s latest resume here.',
      actions: [{ label: 'Open Resume', href: '/Resume.pdf', external: true }],
    };
  }

  if (includesAny(input, ['contact', 'email', 'whatsapp', 'linkedin', 'reach'])) {
    return {
      text: `Best ways to reach Himansh:\n- WhatsApp for quick discussion\n- LinkedIn for professional outreach\n- Email: ${contactLinks.email}`,
      actions: [
        { label: 'WhatsApp', href: contactLinks.whatsapp, external: true },
        { label: 'LinkedIn', href: contactLinks.linkedin, external: true },
        { label: 'Contact Section', href: '#contact', external: false },
      ],
    };
  }

  return {
    text: 'I can help with projects, skills, experience, resume, and contact details. Try asking: "What services does he offer?"',
  };
}

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      text: 'Hi, I am Himansh\'s portfolio assistant. Ask me anything about his work, skills, or availability.',
    },
  ]);
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  const quickPrompts = useMemo(() => starterPrompts, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    messageEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isOpen]);

  const sendMessage = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed || isTyping) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      text: trimmed,
    };

    setMessages((current) => [...current, userMessage]);
    setInput('');
    setIsTyping(true);

    const reply = buildAssistantReply(trimmed);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: 'assistant',
          text: reply.text,
          actions: reply.actions,
        },
      ]);
      setIsTyping(false);
    }, 420);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6">
      {isOpen ? (
        <div className="glass-card w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-3xl border border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/10 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-white">Portfolio Assistant</p>
              <p className="text-xs text-gray-300">Replies on behalf of Himansh</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-white/30 hover:text-white"
              aria-label="Close assistant"
            >
              <FiX className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[55vh] space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div key={message.id}>
                <div
                  className={`w-fit max-w-[88%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                    message.role === 'assistant'
                      ? 'border border-white/10 bg-white/5 text-slate-200'
                      : 'ml-auto bg-white/10 text-white'
                  }`}
                >
                  {message.text}
                </div>

                {message.role === 'assistant' && message.actions?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {message.actions.map((action) => (
                      <a
                        key={`${message.id}-${action.label}`}
                        href={action.href}
                        target={action.external ? '_blank' : undefined}
                        rel={action.external ? 'noreferrer' : undefined}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                      >
                        {action.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            {isTyping ? <p className="text-xs text-slate-400">Assistant is typing...</p> : null}

            <div ref={messageEndRef} />
          </div>

          <div className="border-t border-white/10 px-4 py-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about projects, skills, or contact"
                className="input-focus w-full rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500"
                aria-label="Type your message"
              />
              <button
                type="submit"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Send message"
              >
                <FiSend className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="mt-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition hover:bg-white/20"
        aria-label="Open portfolio assistant"
      >
        <FiMessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}