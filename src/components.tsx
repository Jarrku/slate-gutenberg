/** @jsx jsx */
import React from 'react';
import ReactDOM from 'react-dom';
import { css, jsx } from '@emotion/core';

type Span = HTMLSpanElement;
type Div = HTMLDivElement;

type HtmlEl<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

interface ButtonProps extends HtmlEl<Span> {
  active?: boolean;
  reversed?: boolean;
}

export const Button = React.forwardRef<Span, ButtonProps>(({ active, reversed, ...props }, ref) => (
  <span
    {...props}
    ref={ref}
    css={css`
      cursor: pointer;
      color: ${reversed ? (active ? 'white' : '#aaa') : active ? 'black' : '#ccc'};
    `}
  />
));

interface IEditorValue extends HtmlEl<Div> {
  value: any;
}

export const EditorValue = React.forwardRef<Div, IEditorValue>(({ value, ...props }, ref) => {
  const textLines = value.document.nodes
    .map((node: any) => node.text)
    .toArray()
    .join('\n');
  return (
    <div
      {...props}
      ref={ref}
      css={css`
        margin: 30px -20px 0;
      `}
    >
      <div
        css={css`
          font-size: 14px;
          padding: 5px 20px;
          color: #404040;
          border-top: 2px solid #eeeeee;
          background: #f8f8f8;
        `}
      >
        Slate's value as text
      </div>
      <div
        css={css`
          color: #404040;
          font: 12px monospace;
          white-space: pre-wrap;
          padding: 10px 20px;
          div {
            margin: 0 0 0.5em;
          }
        `}
      >
        {textLines}
      </div>
    </div>
  );
});


export const Icon = React.forwardRef<Span, HtmlEl<Span>>(({ className, ...props }, ref) => {
  const classNames = className ? `material-icons ${className}` : `material-icons`;
  return (
  <span
    {...props}
    ref={ref}
    className={classNames}
    css={css`
      font-size: 18px;
      vertical-align: text-bottom;
    `}
  />
)});

export const Instruction = React.forwardRef<Div, HtmlEl<Div>>((props, ref) => (
  <div
    {...props}
    ref={ref}
    css={css`
      white-space: pre-wrap;
      margin: 0 -20px 10px;
      padding: 10px 20px;
      font-size: 14px;
      background: #f8f8e8;
    `}
  />
));

export const Menu = React.forwardRef<Div, HtmlEl<Div>>((props, ref) => (
  <div
    {...props}
    ref={ref}
    css={css`
      & > * {
        display: inline-block;
      }

      & > * + * {
        margin-left: 15px;
      }
    `}
  />
));

export const Portal: React.FC = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

export const Toolbar = React.forwardRef<Div, HtmlEl<Div>>((props, ref) => (
  <Menu
    {...props}
    ref={ref}
    css={css`
      position: relative;
      padding: 1px 18px 17px;
      margin: 0 -20px;
      border-bottom: 2px solid #eee;
      margin-bottom: 20px;
    `}
  />
));
