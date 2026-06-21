# Typography Scale Reference

## Visual Font Size Comparison

```
DESKTOP (md) → TABLET (sm) → MOBILE (xs)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

H1 (Heading 1) - Display Title
40px (2.5rem) → 32px (2rem) → 28px (1.75rem)
Font Weight: 700 | Line Height: 1.2

H2 (Heading 2) - Section Title
32px (2rem) → 28px (1.75rem) → 24px (1.5rem)
Font Weight: 700 | Line Height: 1.3

H3 (Heading 3) - Subsection
28px (1.75rem) → 24px (1.5rem) → 20px (1.25rem)
Font Weight: 700 | Line Height: 1.4

H4 (Heading 4) - Card/Major Label
24px (1.5rem) → 20px (1.25rem) → 18px (1.125rem)
Font Weight: 600 | Line Height: 1.4

H5 (Heading 5) - Card Title
20px (1.25rem) → 18px (1.125rem) → 16px (1rem)
Font Weight: 600 | Line Height: 1.5

H6 (Heading 6) - Minor Heading
16px (1rem) → 15px (0.9375rem) → 14px (0.875rem)
Font Weight: 600 | Line Height: 1.6

BODY TEXT
────────────────────────────────────────────────

Body1 - Main Paragraph Text
16px (1rem) → 15.5px (0.9687rem) → 15px (0.9375rem)
Font Weight: 400 | Line Height: 1.5

Body2 - Secondary Text
14px (0.875rem) → 13.5px (0.84375rem) → 13px (0.8125rem)
Font Weight: 400 | Line Height: 1.43

LABELS & CAPTIONS
────────────────────────────────────────────────

Subtitle1 - Major Label
16px (1rem) → 15px (0.9375rem) → 14px (0.875rem)
Font Weight: 500 | Line Height: 1.75

Subtitle2 - Minor Label
14px (0.875rem) → 13.5px (0.84375rem) → 13px (0.8125rem)
Font Weight: 500 | Line Height: 1.57

Caption - Small Text
12px (0.75rem) → 11.5px (0.71875rem) → 11px (0.6875rem)
Font Weight: 400 | Line Height: 1.66

Overline - Small Uppercase
12px (0.75rem) → 11.5px (0.71875rem) → 11px (0.6875rem)
Font Weight: 700 | Line Height: 2.66 | TEXT-TRANSFORM: uppercase

ICON SIZES
────────────────────────────────────────────────

Icon Small
28px → 24px → 20px

Icon Medium
32px → 28px → 24px

Icon Large
40px → 36px → 28px
```

## Component Usage Examples

### Hero Section / Error Page
```
┌─────────────────────────────────┐
│  Large Heading (h1/display)     │  ← 40px (desktop) → 28px (mobile)
│                                 │
│  Subheading Description (h5)    │  ← 20px (desktop) → 16px (mobile)
└─────────────────────────────────┘
```

### Main Content Page
```
┌─────────────────────────────────┐
│  Section Title (h2)             │  ← 32px (desktop) → 24px (mobile)
│                                 │
│  Body text paragraph body1      │  ← 16px (desktop) → 15px (mobile)
│  goes here with normal weight   │
│  for readable paragraph flows.  │
└─────────────────────────────────┘
```

### Card Component
```
┌───────────────────────────────────┐
│  Card Title (h5)                  │  ← 20px (desktop) → 16px (mobile)
├───────────────────────────────────┤
│  Card description (body1)         │  ← 16px (desktop) → 15px (mobile)
│  with standard paragraph text     │
│                                   │
│  Author • Date (body2)            │  ← 14px (desktop) → 13px (mobile)
└───────────────────────────────────┘
```

### Contact Section
```
┌─────────────────────────────────┐
│  Contact Title (h4)             │  ← 24px (desktop) → 18px (mobile)
│                                 │
│  Subtitle description (subtitle1)│ ← 16px (desktop) → 14px (mobile)
│                                 │
│  [Email Button]  [Social Icons] │
│  Icons: iconLarge               │  ← 40px (desktop) → 28px (mobile)
└─────────────────────────────────┘
```

## Font Weight Scale

- **700**: Bold headings (h1, h2, h3, overline)
- **600**: Semi-bold headings (h4, h5, h6, button text)
- **500**: Medium labels (subtitle1, subtitle2)
- **400**: Regular body text (body1, body2, caption)

## Line Height Scale

- **1.2**: Headings (h1)
- **1.3**: Section headings (h2)
- **1.4**: Subheadings (h3, h4)
- **1.5**: Body text and larger labels (body1, h5, subtitle1)
- **1.57**: Minor labels (subtitle2)
- **1.6**: Minor headings (h6)
- **1.66**: Captions
- **1.75**: Major labels
- **2.66**: Overline text

## Common Breakpoint Usage

### Mobile-First Approach (xs)
- Use smallest font sizes as base
- Increase for sm and md breakpoints

### Example Component
```jsx
<Typography variant="h2">
  Section Title
</Typography>

// Automatically renders:
// Mobile: 24px
// Tablet: 28px
// Desktop: 32px
```

## Sizing Consistency

All measurements maintain a consistent ratio across breakpoints:
- Heading scale: ~0.75x base (mobile) → 1.0x (tablet) → 1.33x (desktop)
- Body scale: Increments of ~1px between mobile and desktop
- Icon scale: ~10px increments across breakpoints

## When to Use Each Variant

| Variant | Primary Use | Secondary Use |
|---------|------------|---------------|
| h1 | Page title, error header | Display headline |
| h2 | Section title | Major section |
| h3 | Subsection | Category header |
| h4 | Card heading | Important label |
| h5 | Card title | Item heading |
| h6 | Minor heading | Tertiary label |
| body1 | Main content | Paragraph text |
| body2 | Secondary info | Metadata |
| subtitle1 | Section desc | Primary label |
| subtitle2 | Minor desc | Secondary label |
| caption | Timestamps | Helper text |
| overline | Tags | Category labels |

## Testing the Typography

To verify responsive behavior:

1. Open browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test at different viewport widths:
   - Mobile: 375px - 425px
   - Tablet: 600px - 768px
   - Desktop: 1024px+
4. Verify text scales smoothly without jarring jumps
5. Check readability at each breakpoint

## Future Enhancements

Possible additions to the typography system:
- Custom heading variants (accent, display-small, etc.)
- Letter-spacing adjustments per variant
- Custom font stack options
- Dynamic sizing based on viewport width (using clamp())
- Additional breakpoints (lg, xl) for larger displays
