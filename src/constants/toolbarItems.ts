import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  Type,
  Code,
  Link,
  Image,
  List,
  ListOrdered,
  ListTodo  ,
  Quote,
  Minus,
} from "lucide-react";
import type { ToolbarItem } from "../types";

export const toolbarItems: ToolbarItem[] = [
  { icon: Bold, text: "**Bold**", label: "Bold" },
  { icon: Italic, text: "*Italic*", label: "Italic" },
  { icon: Underline, text: "<>Underline</>", label: "Underline" },
  { icon: Strikethrough, text: "~~Strikethrough~~", label: "Strikethrough" },
  { icon: Heading1, text: "\n # Heading 1", label: "Heading 1" },
  { icon: Heading2, text: "\n ## Heading 2", label: "Heading 2" },
  { icon: Heading3, text: "\n ### Heading 3", label: "Heading 3" },
  { icon: Type , text: 'Paragraph', label: 'Paragraph' },
  { icon: List, text: "\n- Bullet list item", label: "Bullet List" },
  {
    icon: ListOrdered,
    text: "\n1. Numbered list item \n2. Numbered list item  \n3. Numbered list item",
    label: "Numbered List",
  },
  { icon: ListTodo, text: '[ ] Checkbox', label: 'Checkbox' },
  { icon: Quote, text: "> Blockquote", label: "Blockquote" },
  { icon: Minus, text: "\n---\n", label: "Horizontal Rule" },
  { icon: Link, text: "[Link](url)", label: "Link" },
  { icon: Image, text: "![Alt text](image-url)", label: "Image" },
  { icon: Code, text: "```\ncode\n```", label: "Code Block" },
];