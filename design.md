```markdown
# Design System Documentation: The Electric Nostalgic

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Electric Nostalgic."**

This is not a historical recreation of a 1950s diner; it is a high-end editorial reimagining. We are blending the kinetic energy of Mid-Century American pop art with the sophisticated layouts of contemporary Argentine lifestyle magazines.

The goal is to move beyond the "grid-lock" of standard web templates. We achieve a premium feel through intentional asymmetry, dramatic typographic scale shifts, and a "layered paper" philosophy. By overlapping line-art illustrations with bold containers and utilizing a signature grain texture, we transform a digital interface into a tactile, high-energy brand experience.

---

## 2. Colors & Surface Architecture
The palette is built on a foundation of high-contrast "Royal Blue" and "Cream," punctuated by "Hot Pink" to disrupt the classic aesthetic and inject modern energy.

### The Palette (Core Tokens)
- **Background (`surface`):** `#fef9f1` — Our "newsprint" cream. All layouts begin here.
- **Primary (`primary`):** `#0c2589` — Used for heavy-hitting brand elements and core actions.
- **Secondary/Accent (`secondary`):** `#9b3b6d` — Our "Pop Art" pink. Reserved for editorial flourishes and cursive accents.
- **Tertiary/Detail (`tertiary`):** `#6c000b` — Represents the "firewood" heat. Used for critical alerts or "hot" menu items.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for defining sections. Structure must be created through **Background Color Shifts**. For example, a `surface_container_low` section should sit directly against a `surface` background to create a boundary through value, not lines.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of premium cardstock.
- Use `surface_container_lowest` for the most recessed elements.
- Use `surface_container_highest` for elements that need to "pop" forward.
- **Nesting:** When placing a menu item inside a category container, use a step-up approach (e.g., a `surface_container_high` card sitting on a `surface_container` section).

### Signature Textures & Gradients
To avoid a flat, "vector-only" look, apply a 3% opacity film grain (Noise) over all `surface` backgrounds. For primary CTAs, utilize a subtle linear gradient from `primary` to `primary_container` to provide a "convex" physical feel reminiscent of vintage plastic diner signage.

---

## 3. Typography
The typographic system relies on a "Tension & Release" strategy: the rigid, heavy nature of the display font contrasted against the fluid, organic nature of the accent script.

- **Display & Headlines (`epilogue`):** Bold, condensed, and unapologetic. Use `display-lg` (3.5rem) for hero sections and `headline-lg` for menu categories. These should feel like woodblock print headlines.
- **Editorial Accents (Fluid Script):** Use a secondary pink cursive for "handwritten" notes, price callouts, or chef's recommendations. This should always overlap other elements (like images or borders) to break the grid.
- **Utility & Body (`workSans`):** Use `body-lg` for descriptions. It provides the "modern" in "modern editorial"—clean, legible, and airy.
- **Labeling:** Use `label-md` in all-caps with 0.05rem letter-spacing for meta-data (e.g., "CALORIES," "SMASH RATIO").

---

## 4. Elevation & Depth
In this system, depth is a matter of "Tonal Layering" rather than structural shadows.

### The Layering Principle
Avoid traditional elevation shadows. Instead, achieve lift by stacking surface tiers. A `surface_container_lowest` card placed on a `surface_container_high` background creates a natural "cut-out" effect that feels more bespoke than a generic drop shadow.

### Ambient Shadows
When an element must float (e.g., a "Order Now" sticky button), use an **Ambient Shadow**:
- **Color:** A tinted version of `on_surface` (10% opacity).
- **Blur:** Large (32px+) with a 0px spread.
- **Purpose:** To mimic the soft glow of a neon sign rather than a harsh sun-cast shadow.

### The "Ghost Border" Fallback
If visual separation is absolutely required for accessibility, use a **Ghost Border**. This is the `outline_variant` token at 15% opacity. It should be barely felt, acting as a "whisper" of a container.

### Glassmorphism
For price badges and "Sticker" shapes, use a backdrop-blur (12px) combined with a semi-transparent `secondary_container` (80% opacity). This creates a "frosted acrylic" look that feels premium and high-tech.

---

## 5. Components

### Buttons
- **Primary:** `rounded-full`, `primary` background, `on_primary` text. Use `title-md` for the label.
- **Secondary (The Sticker):** Starburst or pill-shaped containers using `secondary`.
- **States:** On hover, primary buttons should shift to `primary_container` with a slight "tilt" (2-degree rotation) to mimic the playful pop-art aesthetic.

### Cards & Menu Items
- **Rule:** Forbid divider lines.
- **Separation:** Use `spacing-8` (2rem) of vertical white space or a subtle shift from `surface` to `surface_container_low`.
- **Visuals:** Incorporate royal blue line-art illustrations that partially bleed off the edge of the card.

### Price Badges (The "Pop Art" Sticker)
Use `secondary_fixed_dim` for price badges. Shape should be a "Starburst" or "Oval Pill." Use the accent script for the currency symbol and `display-sm` for the price value.

### Checkerboard Containers
Use the blue-and-white checkerboard pattern *only* in thin strips (using the `spacing-4` height) or as a full-bleed background for specific "Feature" sections. Never use it as a background for text-heavy areas.

---

## 6. Do’s and Don’ts

### Do:
- **Overlap Elements:** Let a burger illustration overlap a heading. It creates a "layered" editorial feel.
- **Use Intentional Asymmetry:** If you have a two-column layout, make one column 60% and the other 40%.
- **Apply Grain:** Always ensure the subtle noise texture is present to prevent the "flat web" look.
- **Embrace the Script:** Use the hot pink cursive to "annotate" the UI as if a editor was marking up a magazine.

### Don’t:
- **Don't use 1px black borders.** It kills the "premium editorial" vibe instantly.
- **Don't use standard grey shadows.** Shadows must always be tinted with the surface color.
- **Don't center-align everything.** Maintain a strong left-aligned axis for body copy to keep the editorial rhythm.
- **Don't use the Red (`tertiary`) for everything.** Use it sparingly for "heat," "firewood," or "urgent" states only. Blue and Pink are your primary drivers.

---

## 7. Spacing & Rhythm
This system uses a base-4 spacing scale.
- **Section Padding:** Use `spacing-20` (5rem) or `spacing-24` (6rem) for top/bottom padding to give the content "room to breathe"—a hallmark of high-end design.
- **Component Gap:** Use `spacing-4` (1rem) for internal card spacing.
- **The "Rhythmic Break":** Occasionally interrupt a clean layout with a diagonal striped border (`primary` and `surface_variant`) to reset the user's visual attention.

---
*Director's Note: Remember, Frank's Grill is high-quality firewood burgers. The design must feel as intentional and "crafted" as the food. If a layout feels too safe, break a rule. Move a sticker. Tilt a heading. Make it vibrate.*```