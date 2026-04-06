'use client';

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { common, createLowlight } from 'lowlight';
import { useCallback } from 'react';

import { cn } from '@/utils/cn';

const lowlight = createLowlight(common);

function ToolbarButton({
  onClick,
  active,
  children
}: {
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded px-2 py-1.5 text-xs font-medium text-[#e8e8f0] transition',
        active ? 'bg-[rgba(79,140,255,0.25)]' : 'hover:bg-[rgba(255,255,255,0.06)]'
      )}
    >
      {children}
    </button>
  );
}

export default function PostEditor({
  content,
  onChange,
  onImageFile
}: {
  content: string;
  onChange: (html: string) => void;
  onImageFile: (file: File) => Promise<string | null>;
}) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        codeBlock: false,
        heading: { levels: [1, 2, 3] },
        link: {
          openOnClick: false,
          autolink: true
        }
      }),
      CodeBlockLowlight.configure({ lowlight }),
      Image.configure({ inline: true, allowBase64: false }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({
        placeholder: 'Write the article body…'
      })
    ],
    content,
    editorProps: {
      attributes: {
        class:
          'min-h-[500px] px-4 py-4 focus:outline-none prose prose-invert max-w-none text-[#bdbdd5] [&_h1]:font-[family-name:var(--font-syne)] [&_h1]:text-3xl [&_h1]:font-extrabold [&_h2]:font-[family-name:var(--font-syne)] [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:font-[family-name:var(--font-syne)] [&_h3]:text-xl [&_h3]:font-bold [&_a]:text-[#4f8cff] [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-white/10 [&_pre]:bg-[#0a0a12]'
      }
    },
    onUpdate: ({ editor: ed }) => {
      onChange(ed.getHTML());
    }
  });

  const setLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes('link').href as string | undefined;
    const url = window.prompt('URL', prev ?? 'https://');
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(async () => {
    if (!editor) return;
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      const url = await onImageFile(file);
      if (url) editor.chain().focus().setImage({ src: url }).run();
    };
    input.click();
  }, [editor, onImageFile]);

  if (!editor) {
    return (
      <div className="min-h-[500px] animate-pulse rounded-xl border border-white/10 bg-[#0a0a12]" />
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#0a0a12]">
      <div className="flex flex-wrap gap-1 border-b border-[rgba(255,255,255,0.07)] bg-[#09090f] p-2">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive('bold')}
        >
          Bold
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive('italic')}
        >
          Italic
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive('underline')}
        >
          Underline
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          active={editor.isActive('heading', { level: 1 })}
        >
          H1
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          active={editor.isActive('heading', { level: 2 })}
        >
          H2
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          active={editor.isActive('heading', { level: 3 })}
        >
          H3
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive('bulletList')}
        >
          • List
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive('orderedList')}
        >
          1. List
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive('blockquote')}
        >
          Quote
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          active={editor.isActive('codeBlock')}
        >
          Code
        </ToolbarButton>
        <ToolbarButton onClick={setLink}>Link</ToolbarButton>
        <ToolbarButton onClick={addImage}>Image</ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          active={editor.isActive({ textAlign: 'left' })}
        >
          ←
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          active={editor.isActive({ textAlign: 'center' })}
        >
          ↔
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          active={editor.isActive({ textAlign: 'right' })}
        >
          →
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().undo().run()}>
          Undo
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().redo().run()}>
          Redo
        </ToolbarButton>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
