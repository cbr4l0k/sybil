# Development Guide

This document outlines the development improvements made to enhance the developer experience and maintainability of the Sybil landing page.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card.astro      # Generic card component with variants
│   ├── Grid.astro      # Layout grid component  
│   ├── Section.astro   # Section wrapper component
│   ├── Nav.astro       # Navigation component
│   └── Link.astro      # Link component
├── layouts/            # Page layouts
│   └── BaseLayout.astro
├── pages/              # Page components
│   └── index.astro
├── scripts/            # TypeScript modules
│   └── menu.ts         # Menu functionality
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared types
└── utils/              # Utility functions
    ├── config.ts       # Site configuration
    ├── css.ts          # CSS utilities
    ├── data.ts         # Data manipulation
    ├── generators.ts   # Component generators
    ├── paths.ts        # Path utilities
    └── validation.ts   # Validation functions
```

## Key Improvements

### 1. Reusable Components

#### Card Component
Generic card component with multiple variants:
- `method` - For methodology items
- `nivel` - For automation levels
- `fase` - For phases (includes numbering)
- `industria` - For industry items

```astro
<Card 
  variant="method" 
  title="Phase Title" 
  body="Description text" 
/>
```

#### Section Component  
Consistent section wrapper:
```astro
<Section 
  id="section-id"
  className="section-class"
  title="Section Title"
  intro="Introduction text"
>
  <Grid variant="method">
    <!-- Content -->
  </Grid>
</Section>
```

#### Grid Component
Layout grid with predefined variants:
```astro
<Grid variant="method">
  <!-- Cards or content -->
</Grid>
```

### 2. Type Safety

Shared TypeScript types in `src/types/index.ts`:
- `LinkProps` - For navigation links
- `CardProps` - For card components  
- `SectionProps` - For section components

### 3. Configuration Management

Centralized configuration in `src/utils/config.ts`:
- Site information (name, email, phone)
- Theme configuration
- Component variants
- Default navigation
- Environment helpers

### 4. Utility Functions

#### CSS Utils (`src/utils/css.ts`)
- `cn()` - Class name combining
- `conditionalClass()` - Conditional classes
- `createVariantClass()` - Variant-based classes

#### Data Utils (`src/utils/data.ts`) 
- Data validation functions
- Array manipulation utilities
- Content preparation helpers

#### Generators (`src/utils/generators.ts`)
- Component data generators
- SEO data generation
- Section data structures

#### Validation (`src/utils/validation.ts`)
- Email/URL validation
- Text sanitization
- Required props validation

### 5. Development Best Practices

- **TypeScript** for type safety
- **Modular components** for reusability
- **Centralized configuration** for maintainability
- **Utility functions** for common operations
- **Consistent naming** conventions
- **Proper separation** of concerns

## Usage Examples

### Creating a New Section

```astro
---
import Section from '../components/Section.astro';
import Grid from '../components/Grid.astro';
import Card from '../components/Card.astro';

const items = [
  { title: "Item 1", body: "Description 1" },
  { title: "Item 2", body: "Description 2" }
];
---

<Section
  id="new-section"
  className="new-section"
  title="Section Title"
  intro="Section introduction"
>
  <Grid variant="method">
    {items.map(item => (
      <Card variant="method" title={item.title} body={item.body} />
    ))}
  </Grid>
</Section>
```

### Using Configuration

```astro
---
import { SITE_CONFIG } from '../utils/config';
---

<a href={`mailto:${SITE_CONFIG.email}`}>Contact Us</a>
```

### Generating Data

```astro
---
import { generateCardData, generatePhaseData } from '../utils/generators';

const cards = [
  generateCardData("Title 1", "Body 1", "method"),
  generateCardData("Title 2", "Body 2", "method")
];
---
```

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Future Enhancements

The structure now supports:
- Easy addition of new sections
- Consistent styling across components
- Type-safe development
- Reusable patterns
- Centralized configuration changes
- Better maintainability and scalability
