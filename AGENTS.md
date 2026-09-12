# Agent Rules

These rules define how the AI agent must behave when working on this repository.

The primary goals are:

- Stay strictly within the user's requested scope.
- Follow the repository's existing conventions.
- Avoid unnecessary refactors or architectural changes.
- Preserve existing behavior.
- Keep changes minimal and predictable.
- Never perform destructive actions without explicit approval.
- Follow the required validation, version control, and deployment workflow.

---

## 1. Core Agent Behavior

### 1.1 Strict Task Scope

Only modify code that is directly required to complete the user's current request.

Do not:

- Perform unrelated cleanup.
- Refactor unrelated code.
- Rename files unnecessarily.
- Move files unnecessarily.
- Change unrelated UI.
- Change unrelated behavior.
- Reformat unrelated code.
- Fix unrelated bugs without being asked.
- Add features that were not requested.
- Modify architecture simply because another approach looks better.

If an unrelated issue is discovered, report it separately instead of modifying it.

A working implementation is not permission to rewrite it.

---

### 1.2 Repository Convention First

Before implementing any change, inspect the existing repository for similar patterns.

Always prefer, in this order:

1. Existing project conventions.
2. Existing reusable components.
3. Existing utilities and helpers.
4. Existing naming conventions.
5. Existing folder structures.
6. Existing styling patterns.
7. Existing dependency choices.
8. Existing implementation patterns.

Do not introduce a new pattern when an established pattern already exists.

Consistency with the repository takes priority over personal preference, generic best practices, or newer patterns.

---

### 1.3 Minimal Diff Principle

Always make the smallest reasonable change necessary to satisfy the request.

Avoid:

- Rewriting entire files for small changes.
- Reformatting unrelated sections.
- Reordering unrelated imports.
- Renaming unrelated variables.
- Replacing working implementations for stylistic reasons.
- Moving files unless required.
- Creating abstractions that are not currently needed.

Prefer targeted edits over broad rewrites.

---

### 1.4 No Unrequested Improvements

Do not modify code merely because it appears:

- Cleaner.
- More modern.
- More idiomatic.
- More performant.
- More reusable.
- More elegant.
- More scalable.

Suggestions outside the requested scope should be presented separately.

Do not include those suggestions in the implementation unless the user explicitly approves them.

---

## 2. Change Approval

Before modifying project files, explain the intended changes.

For non-trivial changes, provide:

- Files expected to be modified.
- A short implementation approach.
- Meaningful trade-offs, if any.
- Alternative approaches when relevant.

Do not modify project files until the user explicitly approves the proposed change.

### Exceptions

The agent may perform the following without additional approval:

- Read-only repository inspection.
- Searching files.
- Reading configuration.
- Checking existing patterns.
- Running non-destructive diagnostic commands.
- Running commands explicitly requested by the user.
- Viewing Git status or diff.

If the user explicitly asks the agent to immediately implement a change, that request counts as approval for that specific scope.

Approval does not automatically extend to unrelated changes.

---

## 3. Ambiguous Requirements

If a requirement is ambiguous and multiple implementations would result in materially different:

- User experience.
- Application behavior.
- Architecture.
- Public API.
- Data structure.
- Maintenance cost.
- Dependency choice.

Then:

1. Briefly explain the available options.
2. Recommend one option when appropriate.
3. Wait for user confirmation before implementation.

Do not silently make major product or architectural decisions.

For minor implementation details that do not materially affect behavior or architecture, follow the repository's existing conventions without asking unnecessary questions.

---

## 4. Preserve Existing Behavior

Changes must preserve existing behavior outside the requested scope.

Do not:

- Remove existing features.
- Change public APIs unnecessarily.
- Change component contracts unnecessarily.
- Modify routing unless required.
- Change data formats unless required.
- Change responsive behavior unless requested.
- Change accessibility behavior unless requested.
- Remove backward compatibility unless explicitly approved.
- Alter unrelated application state or flows.

When modifying shared code, verify that existing callers remain compatible.

---

## 5. Existing User Changes

Never overwrite, discard, or revert changes that appear to have been made by the user or another contributor.

If unexpected modifications are found:

1. Preserve them.
2. Work around them where possible.
3. Identify whether they conflict with the requested task.
4. Inform the user when a conflict exists.

Do not assume uncommitted changes are safe to discard.

---

## 6. Development Workflow

### 6.1 Development Server

Use:

```bash
bun run dev
```

to start Vite.

Vite handles:

- CSS processing.
- Hot Module Replacement.
- Development bundling.

Do not manually build CSS.

Do not introduce a separate CSS build process unless explicitly requested.

---

### 6.2 Package Manager

Use Bun for project package management unless the repository explicitly indicates otherwise.

Prefer:

```bash
bun install
bun add
bun remove
bun run
```

Do not mix package managers unnecessarily.

Do not generate additional lock files such as:

- `package-lock.json`
- `yarn.lock`
- `pnpm-lock.yaml`

when the project uses Bun.

Preserve the repository's existing lock file strategy.

---

## 7. Dependency Rules

Do not add, remove, upgrade, downgrade, or replace dependencies without explicit user approval.

Before proposing a new dependency:

1. Check whether the repository already contains functionality that solves the problem.
2. Check whether the task can reasonably be completed without introducing another dependency.
3. Explain why the dependency is necessary.

Prefer existing dependencies whenever possible.

Do not introduce a large dependency for functionality that can be reasonably implemented with existing tools.

---

## 8. Code Conventions

Follow the repository's existing code style.

Before creating new:

- Components.
- Hooks.
- Utilities.
- Types.
- Constants.
- Services.
- Files.
- Directories.

Inspect similar existing implementations.

Match existing conventions for:

- Naming.
- File structure.
- Imports.
- Exports.
- Component composition.
- State management.
- Error handling.
- TypeScript types.
- Props.
- Styling.
- Comments.

Do not introduce personal conventions when the repository already has an established pattern.

---

## 9. Component Reuse

Before creating a new component, verify whether an existing component can be reused or extended.

Prefer:

1. Reusing an existing component.
2. Extending an existing component when appropriate.
3. Creating a new component only when necessary.

Do not create abstractions prematurely.

Do not extract a component or helper solely because code appears only once unless there is a clear maintainability benefit consistent with existing repository practices.

---

## 10. Vanilla JavaScript & ES Modules

This project uses Vanilla JavaScript without any UI framework (like React or Vue) and without TypeScript.

- Use modern ES6+ features (e.g., const, let, arrow functions, destructuring).
- Use template literals for returning HTML from components (e.g., ``const Component = (data) => `<div>...</div>`;``).
- Do not introduce React hooks (`useState`, `useEffect`) or JSX syntax.
- Keep DOM manipulations minimal and rely on the existing rendering pattern.
- Do not introduce TypeScript types or `.ts`/`.tsx` files.

---

## 11. Error Handling

Follow existing repository error-handling patterns.

Do not:

- Silently swallow errors.
- Add empty `catch` blocks.
- Hide failures without a reason.
- Expose sensitive error information to users.

When adding logging, ensure it is useful and intentional.

Temporary debugging logs must be removed before commit.

---

## 12. Console Logs

Do not leave temporary debugging statements in production code.

Examples include:

```js
console.log(...)
console.debug(...)
console.trace(...)
```

Existing intentional production logging may remain.

Before committing, remove temporary logs introduced during development.

---

## 13. Generated Files

Do not manually edit:

- Build outputs.
- Generated source files.
- Compiled files.
- Dependency folders.
- Generated assets.

unless the repository explicitly requires direct modification.

Prefer changing the source that generates the file.

Do not modify:

```text
node_modules/
dist/
build/
```

unless explicitly required by the project.

---

## 14. Secrets & Sensitive Configuration

Never:

- Commit API keys.
- Commit access tokens.
- Commit passwords.
- Commit credentials.
- Hardcode secrets.
- Expose environment secrets.
- Print sensitive environment values to logs.

Follow the project's existing environment-variable conventions.

Do not commit `.env` files containing secrets unless the repository explicitly uses a safe example file such as:

```text
.env.example
```

Use placeholders in example files.

---

# Design Philosophy & Guidelines

## 15. Design Philosophy

### 15.1 Minimalism

Maintain a clean, text-focused, and premium aesthetic.

Prefer subtle visual details over heavy decoration.

Examples of preferred patterns:

- `bg-dot-pattern`
- Dashed separators.
- Subtle borders.
- Generous whitespace.
- Clear typography hierarchy.
- Minimal motion.
- Small visual accents.

Avoid:

- Heavy gradients unless already part of the design.
- Excessive shadows.
- Overly large cards.
- Unnecessary animations.
- Excessive visual noise.
- Decorative elements that reduce readability.

---

## 16. Catppuccin Theme Enforcement

This project strictly uses the Catppuccin color palette.

Use:

- **Macchiato** for Dark Mode.
- **Latte** for Light Mode.

Never introduce arbitrary hardcoded colors when an established design token exists.

Use existing project classes and CSS variables such as:

```text
bg-macchiato-base
text-macchiato-text
border-macchiato-surface2
```

and their corresponding Latte equivalents.

---

### 16.1 No Hardcoded Colors

Do not introduce arbitrary Tailwind colors such as:

```text
text-[#ffffff]
bg-[#1e1e2e]
border-[#cccccc]
```

Do not introduce arbitrary:

- HEX values.
- RGB values.
- RGBA values.
- HSL values.

unless explicitly approved.

Before introducing any visual value, check whether an equivalent Catppuccin token already exists.

---

### 16.2 Design Token First

Before creating a new color variable or design token:

1. Check existing CSS variables.
2. Check existing Tailwind configuration.
3. Check existing theme utilities.
4. Reuse the closest existing Catppuccin token.

Do not create new design tokens unless necessary and explicitly approved.

---

## 17. UI Consistency

When modifying UI, inspect nearby components and similar screens.

Match existing conventions for:

- Spacing.
- Typography.
- Border radius.
- Button size.
- Input size.
- Icon size.
- Section spacing.
- Breakpoints.
- Hover states.
- Focus states.
- Disabled states.

Do not redesign surrounding UI unless requested.

---

## 18. Responsive Design

Preserve existing responsive behavior.

When adding UI:

- Follow existing breakpoints.
- Test common viewport sizes when relevant.
- Avoid introducing horizontal overflow.
- Ensure text remains readable.
- Maintain usable tap targets.

Do not introduce a new breakpoint strategy unless explicitly approved.

---

## 19. Accessibility

Preserve accessibility behavior.

When applicable:

- Use semantic HTML.
- Maintain keyboard navigation.
- Provide accessible labels.
- Preserve visible focus indicators.
- Use appropriate button and link elements.
- Avoid relying only on color to communicate state.

Do not remove accessibility attributes unless they are demonstrably incorrect.

---

# Validation

## 20. Validation Before Completion

Before considering a change complete, run the relevant validation commands already defined by the repository when available.

Possible validation includes:

```bash
bun run format
bun run build
```

Only run scripts that actually exist in the repository.

Inspect `package.json` first if necessary.

Do not claim that validation passed unless the relevant command was actually executed successfully.

If a validation step cannot be executed, state clearly what was not verified.

---

## 21. Fixing Validation Errors

Only fix validation errors caused by the current task.

If validation reveals pre-existing unrelated errors:

- Do not fix them automatically.
- Mention them separately.
- Clearly distinguish them from errors introduced by the current change.

Do not expand the scope simply to make the entire repository clean.

---

# Git & Version Control

## 22. Git Safety

Never execute destructive Git operations without explicit user approval.

This includes:

```bash
git reset --hard
git clean -fd
git push --force
git push --force-with-lease
git checkout -- .
git restore .
```

Also do not:

- Delete branches.
- Rewrite existing commit history.
- Amend existing commits.
- Drop commits.
- Run interactive rebase.
- Discard uncommitted work.

unless explicitly requested and approved.

Preserve the user's working tree whenever possible.

---

## 23. Git Status Before Changes

Before commit or deployment, inspect:

```bash
git status
```

Ensure you understand which files are:

- Modified.
- Added.
- Deleted.
- Untracked.

Do not accidentally include unrelated files in a commit.

---

## 24. Commit Scope

Only commit files related to the requested task.

Do not automatically stage everything with:

```bash
git add .
```

when unrelated changes exist.

Prefer staging specific files when necessary.

Before committing, verify the staged diff.

---

# Pre-Deployment & Push Checklist

Whenever the user asks to:

- `deploy`
- `push`
- `save`
- publish changes
- push changes to production

follow this sequence.

---

## 25. Step 1 — Clean Up

Ensure there are no leftover:

- Temporary files.
- Debug scripts.
- Experimental files.
- Temporary comments.
- Debug logs.
- Test artifacts.

Examples:

```text
clean_app.js
temp.js
debug.js
test-output.txt
```

Do not delete unknown files without determining whether they belong to the user.

---

## 26. Step 2 — Review Changes

Run:

```bash
git status
git diff
```

Review the changes before committing.

Ensure:

- Only intended files are modified.
- No secrets are included.
- No debugging code remains.
- No unrelated changes are staged.
- The implementation matches the approved scope.

---

## 27. Step 3 — Validation

Run the relevant repository validation scripts when available.

Examples:

```bash
bun run format
bun run build
```

Resolve errors introduced by the current task before continuing.

Do not proceed with a known broken build unless the user explicitly instructs you to.

---

## 28. Step 4 — Semantic Commits

Use strict Conventional Commit prefixes without scopes.

Correct:

```text
feat: improve spacing
fix: correct navigation behavior
docs: update deployment instructions
refactor: simplify theme helper
style: format component markup
test: add navigation tests
chore: update build configuration
```

Incorrect:

```text
feat(ui): improve spacing
fix(nav): correct navigation behavior
```

Do not use commit scopes.

### Allowed Common Prefixes

#### `feat:`

A new user-facing feature.

Example:

```text
feat: add theme switcher
```

#### `fix:`

A user-facing bug fix.

Example:

```text
fix: prevent mobile navigation overflow
```

#### `docs:`

Documentation-only changes.

Example:

```text
docs: update setup instructions
```

#### `style:`

Formatting or stylistic source changes that do not alter behavior.

Example:

```text
style: format component markup
```

#### `refactor:`

Code restructuring that neither adds a feature nor fixes a bug.

Example:

```text
refactor: simplify theme utilities
```

#### `test:`

Adding or correcting tests.

Example:

```text
test: add header component tests
```

#### `chore:`

Maintenance, tooling, or build changes.

Example:

```text
chore: update vite configuration
```

---

## 29. Step 5 — Commit Message Selection

Choose the commit prefix based on the primary purpose of the change.

Do not mislabel changes only to make them appear more significant.

Keep commit messages:

- Concise.
- Clear.
- Lowercase after the prefix when appropriate.
- Focused on what changed.

Avoid vague messages such as:

```text
fix: changes
chore: update
feat: improvements
```

Prefer:

```text
fix: prevent duplicate navigation items
feat: add project search
docs: clarify deployment workflow
```

---

## 30. Step 6 — Sync Remote

Before pushing, always run:

```bash
git pull --rebase
```

This is required to reduce unnecessary merge commits and detect remote changes before deployment.

If a rebase conflict occurs:

- Stop.
- Do not guess how to resolve conflicting user changes.
- Explain the conflict.
- Ask the user before making a potentially destructive resolution if the correct resolution is not obvious.

Never discard remote or local changes simply to complete the rebase.

---

## 31. Step 7 — Push

After successful validation, commit, and rebase:

```bash
git push
```

This repository uses GitHub Pages.

Pushing to:

```text
main
```

automatically triggers deployment.

Do not force push.

---

## 32. Deployment Verification

After pushing, confirm:

- The push succeeded.
- The expected branch was pushed.
- No Git errors occurred.

If deployment status is available through repository tooling, it may be checked.

Do not claim that the deployed website is successfully live unless deployment completion was actually verified.

A successful `git push` only confirms that the repository accepted the push.

---

# Agent Decision Rules

## 33. When Multiple Solutions Exist

If several approaches are possible, prioritize them in this order:

1. Existing repository pattern.
2. Smallest change.
3. Lowest regression risk.
4. Lowest additional complexity.
5. Existing dependency usage.
6. Maintainability.
7. Performance, when materially relevant.

Do not optimize prematurely.

---

## 34. When Unsure

If uncertain about how the repository expects something to be implemented:

1. Search the repository.
2. Inspect similar code.
3. Inspect configuration.
4. Inspect documentation.
5. Follow existing conventions.

Only ask the user when the remaining decision would materially affect behavior, UX, architecture, dependencies, or project direction.

---

## 35. Do Not Assume Missing Requirements

Do not invent:

- Features.
- API contracts.
- Routes.
- Environment variables.
- Product requirements.
- Design requirements.
- Dependencies.
- Backend behavior.

If information can be inferred reliably from existing repository patterns, follow them.

Otherwise present the assumption before making a consequential change.

---

# Final Response Requirements

## 36. After Code Changes

After completing an implementation, summarize only relevant information.

Include:

- What changed.
- Important files changed.
- Validation performed.
- Any unresolved issue or limitation.

Do not claim actions were performed if they were not actually executed.

Do not include unrelated suggestions unless they provide meaningful value.

---

## 37. After Commit or Deployment

When the user requested commit or deployment, report:

- Commit message.
- Whether `git pull --rebase` succeeded.
- Whether `git push` succeeded.
- Validation result.
- Any deployment limitation or failure.

Never state that production is live unless that status was actually confirmed.

---

# Priority Rules

If instructions appear to conflict, use the following priority:

1. Explicit user instruction for the current task.
2. Safety and non-destructive behavior.
3. This `AGENTS.md`.
4. Existing repository conventions.
5. Existing project documentation.
6. General development best practices.

However:

- An explicit user request does not authorize unrelated changes.
- Destructive actions still require explicit approval.
- Repository conventions should not be broken unless the user specifically requests a change to those conventions.

---

# Core Principle

Stay within scope.

Inspect before changing.

Reuse before creating.

Prefer repository conventions over personal preference.

Make the smallest correct change.

Preserve existing behavior.

Validate before declaring success.

Never destroy or overwrite user work without explicit permission.
