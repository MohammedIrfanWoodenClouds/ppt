'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft, ChevronRight, Bot, Cpu, Sparkles, Code2, Zap, Terminal, Globe,
  LayoutDashboard, Glasses, Lightbulb, Rocket, Users, TrendingUp, AlertTriangle, ShieldCheck, Github, Network, CheckCircle2, MessageSquare, Layers, Lock, Star, Activity, Briefcase, FileCode2, ArrowRight, Settings, ThumbsUp, Boxes, Search, FileJson, Crown
} from 'lucide-react';

const AnimatedSlide = ({ children, delay = 0, className = '' }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={className}
    style={{
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ title, icon: Icon, badge }: any) => (
  <div style={{ marginBottom: '16px' }}>
    {badge && <div className="badge pink" style={{ marginBottom: '16px', display: 'inline-flex' }}>{badge}</div>}
    <h2 className="heading-lg" style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '3rem', margin: 0 }}>
      {Icon && <Icon size={48} color="var(--accent-cyan)" />}
      {title}
    </h2>
  </div>
);

const Card = ({ title, text, icon: Icon, color = 'var(--accent-blue)' }: any) => (
  <div className="feature-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
    {Icon && <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon size={32} color={color} />
    </div>}
    <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{title}</h3>
    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{text}</p>
  </div>
);

const slides = [
  // 1: Title Slide
  {
    content: (
      <div className="slide-container" style={{ padding: '0 10%' }}>
        <AnimatedSlide>
          <div className="badge blue" style={{ alignSelf: 'center', marginBottom: '24px' }}>AI IDEs & Models 2026</div>
          <h1 className="heading-xl" style={{ textAlign: 'center', lineHeight: 1.1 }}>
            The AI Coding <span className="text-gradient">Evolution</span>
          </h1>
          <p className="text-lead" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '900px' }}>
            A Deep Dive into Google Antigravity and OpenAI Codex, with insights on GitHub Copilot and Anthropic's Claude.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '48px' }}>
            <Boxes size={64} color="var(--accent-blue)" style={{ filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))' }} />
            <Cpu size={64} color="var(--accent-pink)" style={{ filter: 'drop-shadow(0 0 15px rgba(236, 72, 153, 0.4))' }} />
            <Terminal size={64} color="var(--accent-cyan)" style={{ filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.4))' }} />
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 2: Topics Overview
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%' }}>
        <AnimatedSlide>
          <SectionHeading title="Agenda" icon={Layers} badge="Overview" />
          <div className="grid-2" style={{ marginTop: '24px' }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.3rem', color: 'var(--text-secondary)', listStyleType: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><CheckCircle2 color="var(--accent-cyan)" /> Deep-Dive: OpenAI Codex (The Brain)</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><CheckCircle2 color="var(--accent-cyan)" /> Deep-Dive: Google Antigravity (The Agent)</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><CheckCircle2 color="var(--accent-cyan)" /> Brief: Copilot & Claude Architectures</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><CheckCircle2 color="var(--accent-cyan)" /> Competitor Showdown & Job Impact</li>
            </ul>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.3rem', color: 'var(--text-secondary)', listStyleType: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><CheckCircle2 color="var(--accent-pink)" /> Unexplored Generative Use Cases</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><CheckCircle2 color="var(--accent-pink)" /> Hidden Properties & Behaviors</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><CheckCircle2 color="var(--accent-pink)" /> Risks & Enterprise Challenges</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><CheckCircle2 color="var(--accent-pink)" /> The Future of Development</li>
            </ul>
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 3: Evolution of OpenAI
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%' }}>
        <AnimatedSlide>
          <SectionHeading title="The Evolution of OpenAI" icon={Network} badge="Timeline" />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid var(--glass-border)', marginTop: '32px' }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div className="badge blue" style={{ marginBottom: '16px' }}>How It Started</div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>GPT-2 & GPT-3</h3>
              <p style={{ fontSize: '1.1rem' }}>General Text Prediction<br />Very limited code understanding</p>
            </div>
            <ArrowRight size={32} color="rgba(255,255,255,0.2)" />
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div className="badge purple" style={{ marginBottom: '16px' }}>The Shift</div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-purple)', marginBottom: '16px' }}>ChatGPT (GPT-4)</h3>
              <p style={{ fontSize: '1.1rem' }}>Conversational Code<br />Great at explaining isolated snippets</p>
            </div>
            <ArrowRight size={32} color="rgba(255,255,255,0.2)" />
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div className="badge pink" style={{ marginBottom: '16px' }}>What's Now</div>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-cyan)', marginBottom: '16px' }}>OpenAI O3 / Codex</h3>
              <p style={{ fontSize: '1.1rem' }}>Dedicated Code Brains<br />Powering real-time Copilot IDEs</p>
            </div>
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 4: Evolution of Google AI
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%' }}>
        <AnimatedSlide>
          <SectionHeading title="The Evolution of Google AI" icon={Activity} badge="Timeline" />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid var(--glass-border)', marginTop: '32px' }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div className="badge blue" style={{ marginBottom: '16px' }}>How It Started</div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>PaLM / Bard</h3>
              <p style={{ fontSize: '1.1rem' }}>Early Search Integration<br />Basic scripts only</p>
            </div>
            <ArrowRight size={32} color="rgba(255,255,255,0.2)" />
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div className="badge purple" style={{ marginBottom: '16px' }}>The Shift</div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-blue)', marginBottom: '16px' }}>Gemini Pro/Ultra</h3>
              <p style={{ fontSize: '1.1rem' }}>Massive Context Windows<br />Can read an entire codebase at once</p>
            </div>
            <ArrowRight size={32} color="rgba(255,255,255,0.2)" />
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div className="badge pink" style={{ marginBottom: '16px' }}>What's Now</div>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-pink)', marginBottom: '16px' }}>Google Antigravity</h3>
              <p style={{ fontSize: '1.1rem' }}>Autonomous Agent Workflow<br />Creates, compiles, & tests directly</p>
            </div>
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 5: Evolution of Coders
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%', paddingBottom: '120px' }}>
        <AnimatedSlide>
          <SectionHeading title="The Evolution of Coders" icon={Briefcase} badge="Human Impact" />
          <p className="text-lead" style={{ marginBottom: '24px' }}>How the developer daily workflow drastically transformed over the years.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', textAlign: 'left' }}>
            <div className="glass-panel" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--text-secondary)' }}>The Early Stage (Pre-AI)</h3>
              <ul style={{ paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                <li><strong>Time taken:</strong> Days or Weeks.</li>
                <li>Wrote every line of code manually.</li>
                <li>Hours spent reading API documentation and searching forums.</li>
                <li>Slow, tedious debugging processes.</li>
              </ul>
            </div>
            <div className="glass-panel" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--accent-purple)' }}>The Shift (Autocomplete AI)</h3>
              <ul style={{ paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                <li><strong>Time taken:</strong> Hours or Days.</li>
                <li>Line-by-line function predictions via Copilot.</li>
                <li>Fears around hallucinated snippets.</li>
                <li>Reduced typing, but developer still orchestrates logic completely.</li>
              </ul>
            </div>
            <div className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid var(--accent-cyan)' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--accent-cyan)' }}>The AI Era (Autonomous)</h3>
              <ul style={{ paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                <li><strong>Time taken:</strong> Minutes or Hours.</li>
                <li>Developers define logic and review the code. Agents write it.</li>
                <li>Up to <strong>55% faster</strong> feature delivery.</li>
                <li>Focus shifts to architecture and thorough testing.</li>
              </ul>
            </div>
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 5: Codex Detail 1
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%', paddingBottom: '120px' }}>
        <AnimatedSlide>
          <SectionHeading title="OpenAI Codex: The Core Model" icon={Code2} badge="Deep Dive: Foundation Model" />
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '32px', borderRadius: '16px', borderLeft: '4px solid var(--accent-pink)', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>What It Is Fundamentally</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6 }}>
              Codex is a highly specialized large language model trained on billions of lines of public code and regular text. It is a <strong>stateless engine</strong>—not an IDE, not a product, but pure code logic.
            </p>
          </div>
          <div className="grid-2">
            <Card title="English to Code" text="It changed how we code by turning simple English instructions directly into working code." icon={MessageSquare} color="var(--accent-pink)" />
            <Card title="The Underlying Engine" text="Historically powered GitHub Copilot. It acts as the 'Brain' waiting for text inputs (prompts) to generate code." icon={Cpu} color="var(--accent-purple)" />
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 4: Codex Detail 2
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%' }}>
        <AnimatedSlide>
          <SectionHeading title="OpenAI Codex: Capabilities & Limits" icon={FileCode2} badge="Deep Dive: Execution" />
          <div style={{ display: 'flex', gap: '24px', marginTop: '16px' }}>
            <div className="feature-card" style={{ flex: 1, borderTop: '4px solid #10b981' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: '#10b981' }}>Core Strengths</h3>
              <ul style={{ paddingLeft: '20px', lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                <li><strong>Polyglot:</strong> Fluent in Python, JS, Go, Rust, and more.</li>
                <li><strong>Isolated Logic:</strong> Exceptional at writing complex algorithmic functions from scratch.</li>
                <li><strong>Code Explanation:</strong> Can reverse-engineer obfuscated code into plain English.</li>
              </ul>
            </div>
            <div className="feature-card" style={{ flex: 1, borderTop: '4px solid #ef4444' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: '#ef4444' }}>Limitations of a Bare Model</h3>
              <ul style={{ paddingLeft: '20px', lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                <li><strong>No Environmental Awareness:</strong> It cannot "see" your workspace unless you explicitly pass the code in the prompt.</li>
                <li><strong>No Execution:</strong> Codex cannot run tests, spin up a terminal, or verify if its output actually compiles.</li>
              </ul>
            </div>
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 5: Antigravity Detail 1
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%' }}>
        <AnimatedSlide>
          <SectionHeading title="Google Antigravity: The Agent" icon={Bot} badge="Deep Dive: Agent Framework" />
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '32px', borderRadius: '16px', borderLeft: '4px solid var(--accent-cyan)', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Beyond Text Generation</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6 }}>
              Where Codex stops at predicting code text, <strong>Antigravity begins</strong>. Antigravity is an autonomous agentic system built around Gemini. It forms a continuous control loop: <em>Observe, Think, Act, Verify</em>.
            </p>
          </div>
          <div className="grid-2">
            <Card title="Goal-Oriented Execution" text="You provide a high-level goal ('Build a login page component'), and Antigravity orchestrates the dozens of micro-steps required to achieve it." icon={Network} color="var(--accent-cyan)" />
            <Card title="Stateful Persistence" text="Maintains knowledge representations of the project over long sessions. It 'remembers' your styling choices and architectural guidelines." icon={Activity} color="var(--accent-blue)" />
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 6: Antigravity Detail 2
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%' }}>
        <AnimatedSlide>
          <SectionHeading title="Antigravity: Dynamic Tool Orchestration" icon={Terminal} badge="Deep Dive: Tool Use" />
          <p className="text-lead" style={{ marginBottom: '24px' }}>Antigravity operates with Native Tool Use. It doesn't just guess; it investigates and verifies within a sandbox environment.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--glass-bg)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Search size={32} color="var(--accent-cyan)" />
              <div>
                <strong style={{ fontSize: '1.2rem', display: 'block' }}>Filesystem Operations</strong>
                <span style={{ color: 'var(--text-secondary)' }}>Dynamically lists dirs, reads files, and greps through massive codebases to find context.</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--glass-bg)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <FileJson size={32} color="var(--accent-blue)" />
              <div>
                <strong style={{ fontSize: '1.2rem', display: 'block' }}>File Patching & Editing</strong>
                <span style={{ color: 'var(--text-secondary)' }}>Precisely inserts, deletes, or replaces specific lines across multiple unrelated files at once.</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--glass-bg)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Terminal size={32} color="var(--accent-purple)" />
              <div>
                <strong style={{ fontSize: '1.2rem', display: 'block' }}>Terminal Execution</strong>
                <span style={{ color: 'var(--text-secondary)' }}>Runs compilers, package managers (npm/pip), and tests to observe real errors.</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--glass-bg)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Globe size={32} color="var(--accent-pink)" />
              <div>
                <strong style={{ fontSize: '1.2rem', display: 'block' }}>Browser Subagents</strong>
                <span style={{ color: 'var(--text-secondary)' }}>Spawns subagents to visually verify UI changes on localhost and records interactions.</span>
              </div>
            </div>
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 7: Brief: Copilot & Claude
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%' }}>
        <AnimatedSlide>
          <SectionHeading title="The Interfaces: Copilot & Claude" icon={LayoutDashboard} badge="Brief Overview" />
          <p className="text-lead" style={{ marginBottom: '24px' }}>How product interfaces bridge the gap between models and engineers.</p>

          <div className="grid-2" style={{ gap: '32px' }}>
            <div className="glass-panel" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}><Github /> GitHub Copilot</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '16px' }}>The definitive <strong>IDE Integration</strong> product.</p>
              <ul style={{ paddingLeft: '20px', lineHeight: 1.6, color: 'var(--text-primary)', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Focused on real-time inline code completion (Ghost text).</li>
                <li>Wraps multiple models (Codex, GPT-4, etc) inside VSCode/IntelliJ.</li>
                <li>Excellent for test generation and contained refactoring.</li>
                <li><em>Constraint: Highly reliant on what files you have open.</em></li>
              </ul>
            </div>

            <div className="glass-panel" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}><Sparkles /> Anthropic's Claude AI</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '16px' }}>The <strong>Master of Massive Context</strong>.</p>
              <ul style={{ paddingLeft: '20px', lineHeight: 1.6, color: 'var(--text-primary)', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Offers a colossal 200k+ token context window.</li>
                <li>Superior at absorbing entire codebases conceptually when pasted or piped in.</li>
                <li>Highly favored inside agentic IDEs like Cursor for architecture reasoning.</li>
                <li><em>Constraint: Needs the interface to execute edits.</em></li>
              </ul>
            </div>
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 8: Arch Differences
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%' }}>
        <AnimatedSlide>
          <SectionHeading title="Architecture Pipeline" icon={Layers} badge="System Roles" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: '24px' }}>
            <Card title="1. The Brain (Model)" text="Codex, Claude, Gemini. The core engines analyzing patterns and generating textual logic. Highly capable but unaware of their surroundings." icon={Cpu} color="var(--text-secondary)" />
            <Card title="2. The Interface (Product)" text="GitHub Copilot. Mounts the brain inside your editor view, managing context chunks from open tabs to provide autocomplete." icon={LayoutDashboard} color="var(--accent-blue)" />
            <Card title="3. The Orchestrator (Agent)" text="Google Antigravity. Wraps the brain in an action-loop. It reads your file tree, runs commands, tests outputs, and iterates autonomously." icon={Bot} color="var(--accent-pink)" />
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 9: Comparison Table
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%', paddingBottom: '120px' }}>
        <AnimatedSlide>
          <SectionHeading title="Competitor Showdown" icon={TrendingUp} badge="Matrix" />
          <p className="text-lead" style={{ marginBottom: '16px' }}>Comparing AI approaches across the coding ecosystem.</p>
          <table className="glass-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Google Antigravity</th>
                <th>OpenAI Codex (API)</th>
                <th>GitHub Copilot</th>
                <th>Claude (via Cursor)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Edit Whole Repo</strong></td>
                <td>Autonomous & Strong</td>
                <td>Limited by manual prompt</td>
                <td>Partial / Chat-based</td>
                <td>Very Strong</td>
              </tr>
              <tr>
                <td><strong>Run Commands</strong></td>
                <td>Yes, via its framework</td>
                <td>No</td>
                <td>Limited (via extensions)</td>
                <td>Yes (Agent Mode)</td>
              </tr>
              <tr>
                <td><strong>Reading Context</strong></td>
                <td>Auto-discovery tools</td>
                <td>Manual copy-paste</td>
                <td>Reads open tabs</td>
                <td>Reads thousands of files</td>
              </tr>
            </tbody>
          </table>
        </AnimatedSlide>
      </div>
    )
  },
  // 10: Developer Roles
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%' }}>
        <AnimatedSlide>
          <SectionHeading title="How They Help in Jobs" icon={Users} badge="Team Impact" />
          <div style={{ display: 'flex', gap: '32px', marginTop: '32px' }}>
            <div className="feature-card" style={{ flex: 1, borderTop: '4px solid #6ee7b7' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: '#6ee7b7' }}>1. Junior Developers</h3>
              <ul style={{ paddingLeft: '20px', lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                <li>Learn syntax and frameworks faster interactively.</li>
                <li>Generate necessary boilerplate instantly.</li>
                <li>Decode and document complex legacy code chunks.</li>
              </ul>
            </div>
            <div className="feature-card" style={{ flex: 1, borderTop: '4px solid #93c5fd' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: '#93c5fd' }}>2. Mid-Level Developers</h3>
              <ul style={{ paddingLeft: '20px', lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                <li>Faster and safer multi-file refactoring.</li>
                <li>Brainstorming design patterns securely.</li>
                <li>Radically reduce highly repetitive/tedious tasks.</li>
              </ul>
            </div>
            <div className="feature-card" style={{ flex: 1, borderTop: '4px solid #c084fc' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: '#c084fc' }}>3. Senior Developers</h3>
              <ul style={{ paddingLeft: '20px', lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                <li>High-level system reviews and logic verification.</li>
                <li>Generate complex mock data and test scaffolds.</li>
                <li>Quickly navigate and patch unfamiliar domains.</li>
              </ul>
            </div>
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 11: Productivity
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%', paddingBottom: '120px' }}>
        <AnimatedSlide>
          <SectionHeading title="Real Productivity Impact" icon={Activity} badge="Metrics" />
          <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
            <div>
              <p className="text-lead" style={{ marginBottom: '32px' }}>Real data shows a huge increase in coding speed, depending on how well the developer uses the tools.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.3rem' }}>
                  <TrendingUp color="#34d399" size={32} /> <strong>20–55% faster task completion</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.3rem' }}>
                  <TrendingUp color="#34d399" size={32} /> <strong>New developers learn much faster</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.3rem' }}>
                  <TrendingUp color="#34d399" size={32} /> <strong>Less time spent searching online for answers</strong>
                </div>
              </div>
            </div>

            <div className="glass-panel" style={{ border: '1px solid rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.05)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <AlertTriangle size={32} /> The Catch...
              </h3>
              <ul style={{ fontSize: '1.2rem', lineHeight: 1.8, paddingLeft: '24px' }}>
                <li>The code <strong>always needs</strong> a human check.</li>
                <li>Code might fail without proper automated tests.</li>
                <li style={{ color: '#fca5a5' }}><em>Note: AI helps experts more than beginners.</em></li>
              </ul>
            </div>
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 12: Developer Implementation & Helpfulness
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%', paddingBottom: '120px' }}>
        <AnimatedSlide>
          <SectionHeading title="Real Developer Implementation" icon={Code2} badge="Usability & Helpfulness" />
          <p className="text-lead" style={{ marginBottom: '24px' }}>How AI is actually being rolled out to engineering teams, and how it impacts their daily experience.</p>
          <div className="grid-2">
            <div className="glass-panel">
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '12px' }}><Settings size={28} /> Setup & Usability</h3>
              <ul style={{ paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                <li><strong>Easy Local Setup:</strong> Tools like Copilot and Cursor install as simple IDE extensions in seconds.</li>
                <li><strong>Seamless UX:</strong> The AI works in the background using "Ghost Text" (gray suggestions). Developers just hit <code>Tab</code> to accept.</li>
                <li><strong>Low Friction:</strong> No need to switch to a browser window; the AI lives where the code is written.</li>
              </ul>
            </div>
            <div className="glass-panel">
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--accent-pink)', display: 'flex', alignItems: 'center', gap: '12px' }}><ThumbsUp size={28} /> Developer Feedback & Feelings</h3>
              <ul style={{ paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                <li><strong>Less Mental Fatigue:</strong> AI handles the boring, repetitive typing, keeping developers in a "flow state".</li>
                <li><strong>More Creativity:</strong> Developers spend time solving complex logic rather than remembering specific syntax.</li>
                <li><strong>Highly Helpful:</strong> 85% of developers report feeling more satisfied with their jobs after implementing AI tools.</li>
              </ul>
            </div>
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 13: Unexplored Developer Use Cases
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%' }}>
        <AnimatedSlide>
          <SectionHeading title="Unexplored Developer Edge Cases" icon={Lightbulb} badge="Innovation" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '24px' }}>
            <Card title="1. Instant Bug Feedback Loops" text="Connect an AI agent to your error tracker. When a bug happens in live production, the agent reads the error, finds the broken code, and writes a fix immediately." icon={Zap} />
            <Card title="2. Generative UX/UI Building" text="Developers feed raw user-data to an AI model, and the AI automatically adjusts the frontend button colors and layouts to improve user clicks." icon={Layers} color="var(--accent-pink)" />
            <Card title="3. Edge Case Amplification" text="A developer writes the basic rule. The AI returns 50 extremely weird, tricky edge-case test rules that humans usually forget about." icon={FileCode2} color="#10b981" />
            <Card title="4. Auto-Documenting Old Code" text="Point an autonomous agent at a terrible, 10-year-old codebase with no notes. It auto-reads everything and writes a beautiful, clean wiki guide." icon={Glasses} color="#f59e0b" />
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 13: Hidden Properties
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%' }}>
        <AnimatedSlide>
          <SectionHeading title="Hidden Model Properties" icon={Glasses} badge="Under The Hood" />
          <div className="flex-col" style={{ gap: '20px', marginTop: '24px' }}>
            <div className="feature-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '24px' }}>
              <Star size={48} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Extreme Context Sensitivity</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Models mimic the environment. Clean code with logical variables spawns robust AI generation. Spaghetti code breeds spaghetti AI outputs.</p>
              </div>
            </div>
            <div className="feature-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '24px' }}>
              <Terminal size={48} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>The "Prompting" Ceiling</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Vague inputs yield buggy, generic code. Highly specific, constraint-bound instructions with examples dramatically elevate the quality of generated algorithms.</p>
              </div>
            </div>
            <div className="feature-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '24px' }}>
              <Bot size={48} color="var(--accent-pink)" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Library Popularity Bias</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Because models are trained statistically, asking for React/Python code is flawless. Asking to build an app in a niche 3-year-old Rust library will likely hallucinate APIs.</p>
              </div>
            </div>
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 14: Risks
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%', paddingBottom: '120px' }}>
        <AnimatedSlide>
          <SectionHeading title="Risks & Limitations" icon={AlertTriangle} badge="Warnings" />
          <div className="grid-2" style={{ gap: '48px', marginTop: '24px' }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '24px', listStyleType: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '24px', background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px' }}>
                <AlertTriangle color="#ef4444" size={32} /> <span style={{ fontSize: '1.2rem' }}>AI creates fake APIs and libraries that do not exist (Hallucinations).</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '24px', background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px' }}>
                <AlertTriangle color="#ef4444" size={32} /> <span style={{ fontSize: '1.2rem' }}>Generates insecure code, sometimes leaking credentials or bad logic.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '24px', background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px' }}>
                <AlertTriangle color="#ef4444" size={32} /> <span style={{ fontSize: '1.2rem' }}>High cloud compute API costs if an agent loops infinitely.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '24px', background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px' }}>
                <AlertTriangle color="#ef4444" size={32} /> <span style={{ fontSize: '1.2rem' }}>Accidentally copying licensed code from public training data.</span>
              </li>
            </ul>
            <div className="glass-panel flex-col" style={{ justifyContent: 'center' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>The Biggest Risk: <span style={{ color: '#ef4444' }}>Blind Trust</span></h3>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>Tired developers might accept bad AI code without reading it, sending broken features directly to users.</p>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-cyan)' }}>The Solution:</h3>
              <p style={{ fontSize: '1.4rem', fontWeight: 600 }}>Never trust the AI completely. <em>Review every line of code.</em></p>
            </div>
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 15: Enterprise
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%' }}>
        <AnimatedSlide>
          <SectionHeading title="Enterprise Strategy & Adoption" icon={Briefcase} badge="Business Considerations" />
          <table className="glass-table" style={{ marginTop: '32px' }}>
            <thead>
              <tr>
                <th style={{ fontSize: '1.4rem' }}>Key Concern</th>
                <th style={{ fontSize: '1.4rem' }}>Business Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontSize: '1.2rem', fontWeight: 600 }}><Lock size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} /> Data Privacy</td>
                <td style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Fears of sending proprietary logic out to third-party endpoints. (Mitigated by zero-retention enterprise SLAs).</td>
              </tr>
              <tr>
                <td style={{ fontSize: '1.2rem', fontWeight: 600 }}><ShieldCheck size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} /> Compliance</td>
                <td style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Navigating strict regulations (HIPAA, FedRAMP). AI outputs must be traceable and auditable.</td>
              </tr>
              <tr>
                <td style={{ fontSize: '1.2rem', fontWeight: 600 }}><Activity size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} /> Model Accuracy</td>
                <td style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>At enterprise scale, a 5% hallucination rate across 1,000 engineers yields massive technical debt.</td>
              </tr>
              <tr>
                <td style={{ fontSize: '1.2rem', fontWeight: 600 }}><Network size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} /> Vendor Lock-in</td>
                <td style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Over-reliance on one ecosystem (Microsoft vs. Google) creates massive pipeline dependencies over time.</td>
              </tr>
            </tbody>
          </table>
        </AnimatedSlide>
      </div>
    )
  },
  // 16: Future Direction
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%' }}>
        <AnimatedSlide>
          <SectionHeading title="The Future Direction" icon={Rocket} badge="Roadmap" />
          <p className="text-lead" style={{ marginBottom: '48px' }}>The transition from reactive autocomplete to proactive Autonomous Agentic Pipelines.</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
            <div style={{ textAlign: 'center' }}>
              <Briefcase size={48} color="var(--accent-cyan)" style={{ marginBottom: '16px' }} />
              <p style={{ fontSize: '1.2rem' }}>Read Assigned<br />Jira Ticket</p>
            </div>
            <ArrowRight size={32} color="rgba(255,255,255,0.2)" />
            <div style={{ textAlign: 'center' }}>
              <Code2 size={48} color="var(--accent-blue)" style={{ marginBottom: '16px' }} />
              <p style={{ fontSize: '1.2rem' }}>Clone & Modify<br />Repository</p>
            </div>
            <ArrowRight size={32} color="rgba(255,255,255,0.2)" />
            <div style={{ textAlign: 'center' }}>
              <Zap size={48} color="var(--accent-purple)" style={{ marginBottom: '16px' }} />
              <p style={{ fontSize: '1.2rem' }}>Iterate, Test,<br />& Fix Bugs</p>
            </div>
            <ArrowRight size={32} color="rgba(255,255,255,0.2)" />
            <div style={{ textAlign: 'center' }}>
              <Github size={48} color="var(--accent-pink)" style={{ marginBottom: '16px' }} />
              <p style={{ fontSize: '1.2rem' }}>Open Validated<br />Pull Request</p>
            </div>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '40px', fontSize: '1.2rem' }}>
            Antigravity, advanced Copilot Workspace forms, and Claude 3.5 integrations are mapping to this exact automated orchestration capability.
          </p>
        </AnimatedSlide>
      </div>
    )
  },
  // 17: Conclusion
  {
    content: (
      <div className="slide-container slide-scroll" style={{ alignItems: 'flex-start', padding: '40px 10%' }}>
        <AnimatedSlide>
          <SectionHeading title="Final Conclusion" icon={Crown} badge="Summary" />
          <div className="glass-panel" style={{ padding: '64px', textAlign: 'center', margin: '0 auto', maxWidth: '1000px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <h2 style={{ fontSize: '2.5rem', lineHeight: 1.4 }}>AI Tools are strictly <br /><span className="text-gradient" style={{ fontSize: '4rem' }}>Amplifiers</span><br />of engineering capability.</h2>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '32px' }}>They do not replace engineers; they replace the plumbing and boilerplate.</p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: 'var(--glass-bg)', padding: '20px', borderRadius: '50%' }}><Boxes size={32} /></div>
                <span style={{ fontSize: '1.1rem' }}>Require Strong<br />Fundamentals</span>
              </div>
              <div style={{ width: '2px', height: '60px', background: 'rgba(255,255,255,0.1)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: 'var(--glass-bg)', padding: '20px', borderRadius: '50%' }}><ShieldCheck size={32} /></div>
                <span style={{ fontSize: '1.1rem' }}>Require Rock-Solid<br />Testing Platforms</span>
              </div>
              <div style={{ width: '2px', height: '60px', background: 'rgba(255,255,255,0.1)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: 'var(--glass-bg)', padding: '20px', borderRadius: '50%' }}><Glasses size={32} /></div>
                <span style={{ fontSize: '1.1rem' }}>Require Rigorous<br />Human Review</span>
              </div>
            </div>
          </div>
        </AnimatedSlide>
      </div>
    )
  },
  // 18: End Card
  {
    content: (
      <div className="slide-container slide-scroll" style={{ justifyContent: 'center', alignItems: 'center', padding: '0 10%' }}>
        <AnimatedSlide>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles size={120} color="var(--accent-pink)" style={{ filter: 'drop-shadow(0 0 30px rgba(236,72,153,0.5))' }} />
            </motion.div>
            <h1 className="heading-xl">Thank You!</h1>
            <p className="text-lead" style={{ margin: '0 auto' }}>Embrace the AI frontier wisely and build the future.</p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <div className="badge">Q&A Session</div>
              <div className="badge purple">Connect & Discuss</div>
            </div>
          </div>
        </AnimatedSlide>
      </div>
    )
  }
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Progress Bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, height: '4px', background: 'linear-gradient(to right, var(--accent-cyan), var(--accent-purple), var(--accent-pink))', width: `${((currentSlide + 1) / slides.length) * 100}%`, zIndex: 1000, transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} />

      <style dangerouslySetInnerHTML={{
        __html: `
        .glass-table { width: 100%; border-collapse: separate; border-spacing: 0; margin-top: 2rem; border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.01); }
        .glass-table th { background: rgba(255,255,255,0.05); padding: 20px 24px; text-align: left; border-bottom: 2px solid rgba(255,255,255,0.1); color: var(--accent-cyan); font-weight: 600; font-size: 1.2rem; }
        .glass-table td { padding: 20px 24px; border-bottom: 1px solid rgba(255,255,255,0.05); background: transparent; font-size: 1.1rem; color: var(--text-secondary); }
        .glass-table tr:last-child td { border-bottom: none; }
        .glass-table tr:hover td { background: rgba(255,255,255,0.03); color: white; }
        .glass-table td strong { color: white; }
        
        .slide-scroll { overflow-y: auto; max-height: 100vh; padding-bottom: 120px !important; }
        .slide-scroll::-webkit-scrollbar { width: 10px; }
        .slide-scroll::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); }
        .slide-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 8px; border: 2px solid var(--bg-color); }
        .slide-scroll::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.3); }
      `}} />

      {/* Abstract Background Elements */}
      <div className="bg-mesh">
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
        <div className="bg-orb orb-3" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ position: 'absolute', inset: 0, display: 'flex' }}
        >
          {slides[currentSlide].content}
        </motion.div>
      </AnimatePresence>

      <div className="controls" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button
          className="control-btn"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-secondary)', minWidth: '80px', textAlign: 'center' }}>
          {currentSlide + 1} <span style={{ opacity: 0.5 }}>/</span> {slides.length}
        </div>
        <button
          className="control-btn"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </main>
  );
}
