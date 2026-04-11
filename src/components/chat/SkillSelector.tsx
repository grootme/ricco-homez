'use client';

import {
  Search,
  TrendingUp,
  Calculator,
  MapPin,
  DollarSign,
  Home,
  ChevronDown,
} from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useChat } from './ChatProvider';
import { getSkillList } from '@/lib/ai/skills';
import { motion, AnimatePresence } from 'framer-motion';

const ICON_MAP: Record<string, React.ElementType> = {
  Search,
  TrendingUp,
  Calculator,
  MapPin,
  DollarSign,
  Home,
};

interface SkillSelectorProps {
  compact?: boolean;
}

export function SkillSelector({ compact = false }: SkillSelectorProps) {
  const { currentSkill, setSkill } = useChat();
  const skills = getSkillList();
  const activeSkill = skills.find((s) => s.id === currentSkill);
  const ActiveIcon = activeSkill ? ICON_MAP[activeSkill.icon] || Search : Search;

  if (compact) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1.5 px-2 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            <ActiveIcon className="size-3.5 text-primary" />
            <span className="hidden sm:inline">{activeSkill?.name}</span>
            <ChevronDown className="size-3 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          side="bottom"
          className="w-56 p-1.5"
        >
          {skills.map((skill) => {
            const Icon = ICON_MAP[skill.icon] || Search;
            const isActive = skill.id === currentSkill;
            return (
              <button
                key={skill.id}
                onClick={() => setSkill(skill.id)}
                className={cn(
                  'flex items-center gap-2.5 w-full rounded-lg px-2.5 py-2 text-left text-sm transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-muted text-foreground'
                )}
              >
                <div
                  className={cn(
                    'flex items-center justify-center size-7 rounded-md',
                    isActive ? 'bg-primary/15' : 'bg-muted'
                  )}
                >
                  <Icon className={cn('size-3.5', isActive ? 'text-primary' : 'text-muted-foreground')} />
                </div>
                <div className="min-w-0">
                  <div className="font-medium text-xs">{skill.name}</div>
                  <div className="text-[10px] text-muted-foreground truncate">{skill.description}</div>
                </div>
              </button>
            );
          })}
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <div className="flex gap-1.5 overflow-x-auto pb-1 px-1 scrollbar-none">
      {skills.map((skill) => {
        const Icon = ICON_MAP[skill.icon] || Search;
        const isActive = skill.id === currentSkill;
        return (
          <button
            key={skill.id}
            onClick={() => setSkill(skill.id)}
            className={cn(
              'flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0',
              isActive
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            <Icon className="size-3" />
            {skill.name}
          </button>
        );
      })}
    </div>
  );
}
