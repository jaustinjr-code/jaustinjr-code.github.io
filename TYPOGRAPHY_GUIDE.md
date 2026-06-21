# Typography System Guide

## Overview

This document describes the responsive typography system implemented across all client projects. The system ensures consistent, scalable font sizes across mobile, tablet, and desktop screen sizes.

## Responsive Breakpoints

The typography system uses Material-UI breakpoints:

- **Mobile (xs)**: < 600px
- **Tablet (sm)**: 600px - 960px
- **Desktop (md)**: > 960px

## Typography Scale

### Heading Variants

#### `h1` - Display/Page Title
- **Mobile**: 1.75rem (28px)
- **Tablet**: 2rem (32px)
- **Desktop**: 2.5rem (40px)
- **Font Weight**: 700 (Bold)
- **Line Height**: 1.2
- **Use Case**: Main page titles, error page headers

#### `h2` - Section Heading
- **Mobile**: 1.5rem (24px)
- **Tablet**: 1.75rem (28px)
- **Desktop**: 2rem (32px)
- **Font Weight**: 700 (Bold)
- **Line Height**: 1.3
- **Use Case**: Section titles like "Projects", "About Me"

#### `h3` - Subsection Heading
- **Mobile**: 1.25rem (20px)
- **Tablet**: 1.5rem (24px)
- **Desktop**: 1.75rem (28px)
- **Font Weight**: 700 (Bold)
- **Line Height**: 1.4

#### `h4` - Heading/Major Label
- **Mobile**: 1.125rem (18px)
- **Tablet**: 1.25rem (20px)
- **Desktop**: 1.5rem (24px)
- **Font Weight**: 600 (Semi-Bold)
- **Line Height**: 1.4
- **Use Case**: Contact section title, card titles

#### `h5` - Card Title/Subheading
- **Mobile**: 1rem (16px)
- **Tablet**: 1.125rem (18px)
- **Desktop**: 1.25rem (20px)
- **Font Weight**: 600 (Semi-Bold)
- **Line Height**: 1.5
- **Use Case**: Article/project card titles

#### `h6` - Minor Heading
- **Mobile**: 0.875rem (14px)
- **Tablet**: 0.9375rem (15px)
- **Desktop**: 1rem (16px)
- **Font Weight**: 600 (Semi-Bold)
- **Line Height**: 1.6

### Body Text Variants

#### `body1` - Primary Body Text
- **Mobile**: 0.9375rem (15px)
- **Tablet**: 0.9687rem (15.5px)
- **Desktop**: 1rem (16px)
- **Font Weight**: 400 (Regular)
- **Line Height**: 1.5
- **Use Case**: Main paragraph text, article content

#### `body2` - Secondary Body Text
- **Mobile**: 0.8125rem (13px)
- **Tablet**: 0.84375rem (13.5px)
- **Desktop**: 0.875rem (14px)
- **Font Weight**: 400 (Regular)
- **Line Height**: 1.43
- **Use Case**: Secondary text, metadata, descriptions

### Label Variants

#### `subtitle1` - Major Label
- **Mobile**: 0.875rem (14px)
- **Tablet**: 0.9375rem (15px)
- **Desktop**: 1rem (16px)
- **Font Weight**: 500 (Medium)
- **Line Height**: 1.75
- **Use Case**: Section descriptions, labels

#### `subtitle2` - Minor Label
- **Mobile**: 0.8125rem (13px)
- **Tablet**: 0.84375rem (13.5px)
- **Desktop**: 0.875rem (14px)
- **Font Weight**: 500 (Medium)
- **Line Height**: 1.57

#### `caption` - Small Text
- **Mobile**: 0.6875rem (11px)
- **Tablet**: 0.71875rem (11.5px)
- **Desktop**: 0.75rem (12px)
- **Font Weight**: 400 (Regular)
- **Line Height**: 1.66
- **Use Case**: Timestamps, helper text

#### `overline` - Small Uppercase
- **Mobile**: 0.6875rem (11px)
- **Tablet**: 0.71875rem (11.5px)
- **Desktop**: 0.75rem (12px)
- **Font Weight**: 700 (Bold)
- **Line Height**: 2.66
- **Text Transform**: UPPERCASE
- **Use Case**: Labels, tags

### Button Text
- **Font Size**: 0.875rem (14px)
- **Font Weight**: 600 (Semi-Bold)
- **Line Height**: 1.75
- **Text Transform**: UPPERCASE

## Responsive Font Size Constants

In addition to Typography variants, a `ResponsiveFontSizes` object is provided in `resources/styles.js` for common use cases:

```javascript
import { ResponsiveFontSizes } from "@resources/styles";

// Available constants:
ResponsiveFontSizes.display        // { xs: "1.75rem", sm: "2rem", md: "2.5rem" }
ResponsiveFontSizes.heading        // { xs: "1.5rem", sm: "1.75rem", md: "2rem" }
ResponsiveFontSizes.subheading     // { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }
ResponsiveFontSizes.title          // { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" }
ResponsiveFontSizes.body           // { xs: "0.9375rem", sm: "0.9687rem", md: "1rem" }
ResponsiveFontSizes.bodySmall      // { xs: "0.8125rem", sm: "0.84375rem", md: "0.875rem" }
ResponsiveFontSizes.caption        // { xs: "0.6875rem", sm: "0.71875rem", md: "0.75rem" }

// Icon sizes:
ResponsiveFontSizes.iconSmall      // { xs: "20px", sm: "24px", md: "28px" }
ResponsiveFontSizes.iconMedium     // { xs: "24px", sm: "28px", md: "32px" }
ResponsiveFontSizes.iconLarge      // { xs: "28px", sm: "36px", md: "40px" }
```

## Usage Examples

### Using Typography Variants (Recommended)

```jsx
import { Typography } from "@mui/material";

// Page title
<Typography variant="h1">Welcome</Typography>

// Section heading
<Typography variant="h2">Projects</Typography>

// Card title
<Typography variant="h5">Project Name</Typography>

// Body text
<Typography variant="body1">This is paragraph text.</Typography>

// Secondary text
<Typography variant="body2">Small description</Typography>
```

### Using Responsive Font Size Constants

```jsx
import { Typography } from "@mui/material";
import { ResponsiveFontSizes } from "@resources/styles";

<Typography sx={{ fontSize: ResponsiveFontSizes.display }}>
  Large Responsive Title
</Typography>

<Send sx={{ fontSize: ResponsiveFontSizes.iconLarge }} />
```

### Using sx Prop for Custom Sizing

```jsx
<Typography sx={{ 
  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
  fontWeight: 600
}}>
  Custom Sized Text
</Typography>
```

## Font Family

All text uses the default Material-UI typography font stack:
- **Primary**: Roboto
- **Fallback**: Helvetica, Arial, sans-serif

## Implementation Details

### Theme Configuration
The main theme is configured in `src/resources/themes.js` with:
- `responsiveFontSizes()` wrapper for automatic scaling
- Comprehensive typography definitions for all variants
- Consistent line heights and letter spacing
- Color scheme definitions (light/dark modes)

### Utility Files
- **`src/resources/typography.js`**: Typography variant styles for direct use
- **`src/resources/styles.js`**: Reusable responsive font size constants and other style utilities

## Migration Guide

### Old Code
```jsx
<Typography sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}>
  Title
</Typography>
```

### New Code (Option 1 - Preferred)
```jsx
<Typography variant="h1">Title</Typography>
```

### New Code (Option 2)
```jsx
import { ResponsiveFontSizes } from "@resources/styles";
<Typography sx={{ fontSize: ResponsiveFontSizes.display }}>
  Title
</Typography>
```

## Benefits

1. **Consistency**: All typography follows the same scale across the application
2. **Maintainability**: Centralized configuration makes updates easier
3. **Responsive**: Automatic scaling across all screen sizes
4. **Accessibility**: Proper contrast ratios and readable line heights
5. **Performance**: Uses theme utilities for optimal rendering
6. **Predictability**: Semantic variant names make intent clear

## Best Practices

1. **Use semantic variants**: Prefer `variant="h1"` over custom `sx` props when possible
2. **Maintain hierarchy**: Use h1 for main content, h2 for sections, h5 for cards
3. **Readable line lengths**: Keep text width between 50-75 characters for body text
4. **Sufficient contrast**: All text meets WCAG AA standards
5. **Icon sizing**: Use `ResponsiveFontSizes.iconSmall/Medium/Large` for consistent icon sizing

## Troubleshooting

### Text appears too small on mobile
- Check that you're using a Typography variant or ResponsiveFontSizes constant
- Verify the breakpoint definitions in your browser's dev tools

### Inconsistent sizing across pages
- Ensure all Typography components use the `variant` prop
- Check for hardcoded pixel values and replace with centralized constants

### Text not scaling
- Verify `responsiveFontSizes()` is applied in the theme
- Clear browser cache and rebuild
- Check browser zoom level is at 100%
