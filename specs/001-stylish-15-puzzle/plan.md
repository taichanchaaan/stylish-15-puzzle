# Implementation Plan: Stylish 15-Puzzle Game

**Branch**: `001-stylish-15-puzzle` | **Date**: 2025/09/04 | **Spec**: spec.md
**Input**: Feature specification from `/specs/001-stylish-15-puzzle/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
4. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
5. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, or `GEMINI.md` for Gemini CLI).
6. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
7. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
8. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
Create a stylish, modern 15-puzzle game as a single-page web application using React and TypeScript. The game will feature smooth animations for tile movements and a clean, minimalist UI.

## Technical Context
**Language/Version**: TypeScript 5.x
**Primary Dependencies**: React 18, Framer Motion (for animations), Tailwind CSS (for styling)
**Storage**: N/A (State will be managed in the client)
**Testing**: Jest, React Testing Library
**Target Platform**: Modern Web Browsers (Chrome, Firefox, Safari, Edge)
**Project Type**: Web Application (Frontend only)
**Performance Goals**: 60 FPS during tile animations
**Constraints**: Must be a single-page application (SPA) with no backend server.
**Scale/Scope**: Single player, single screen puzzle.

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Simplicity**:
- Projects: 1 (frontend)
- Using framework directly? Yes
- Single data model? Yes
- Avoiding patterns? Yes

**Architecture**:
- EVERY feature as library? No. VIOLATION - Documented in Complexity Tracking.
- Libraries listed: React (UI), Framer Motion (animation), Tailwind CSS (styling)
- CLI per library: N/A
- Library docs: N/A

**Testing (NON-NEGOTIABLE)**:
- RED-GREEN-Refactor cycle enforced? Yes
- Git commits show tests before implementation? Yes
- Order: Contract→Integration→E2E→Unit strictly followed? N/A (No contracts)
- Real dependencies used? N/A
- Integration tests for: new libraries, contract changes, shared schemas? N/A
- FORBIDDEN: Implementation before test, skipping RED phase. Yes.

**Observability**:
- Structured logging included? No. VIOLATION - Documented in Complexity Tracking.
- Frontend logs → backend? N/A
- Error context sufficient? Yes

**Versioning**:
- Version number assigned? 1.0.0
- BUILD increments on every change? No
- Breaking changes handled? N/A

## Project Structure

### Documentation (this feature)
```
specs/[###-feature]/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
# Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure]
```

**Structure Decision**: Option 2: Web application. The project will be structured with a `frontend` directory containing all the React/TypeScript source code and a corresponding `tests` directory.

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - For each NEEDS CLARIFICATION → research task
   - For each dependency → best practices task
   - For each integration → patterns task

2. **Generate and dispatch research agents**:
   ```
   For each unknown in Technical Context:
     Task: "Research {unknown} for {feature context}"
   For each technology choice:
     Task: "Find best practices for {tech} in {domain}"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate API contracts** from functional requirements:
   - For each user action → endpoint
   - Use standard REST/GraphQL patterns
   - Output OpenAPI/GraphQL schema to `/contracts/`

3. **Generate contract tests** from contracts:
   - One test file per endpoint
   - Assert request/response schemas
   - Tests must fail (no implementation yet)

4. **Extract test scenarios** from user stories:
   - Each story → integration test scenario
   - Quickstart test = story validation steps

5. **Update agent file incrementally** (O(1) operation):
   - Run `/scripts/update-agent-context.sh [claude|gemini|copilot]` for your AI assistant
   - If exists: Add only NEW tech from current plan
   - Preserve manual additions between markers
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

**Output**: data-model.md, /contracts/*, failing tests, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `/templates/tasks-template.md` as base.
- Generate tasks from the `spec.md` and `plan.md` files.
- Create tasks for setting up the React/TypeScript project with Tailwind CSS and Framer Motion.
- Create tasks for building the UI components (Board, Tile).
- Create tasks for implementing the game logic (shuffling, moving tiles, checking for win condition).
- Create tasks for writing unit and integration tests for the components and game logic.

**Ordering Strategy**:
- TDD order: Tests will be written before the implementation for each component and function.
- Dependency order:
  1.  Project setup.
  2.  Game logic models and functions.
  3.  UI components.
  4.  Integration of UI and game logic.
- Mark [P] for parallel execution where possible (e.g., component styling and logic implementation if done by different people).

**Estimated Output**: 15-20 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Architecture: Not a library | This is a simple, self-contained game. Creating a library adds unnecessary complexity. | The overhead of creating a library outweighs the benefits for this small project. |
| Observability: No structured logging | For this client-side application, browser developer tools will be sufficient for debugging. | Implementing a structured logging backend is overkill for a simple game. |


## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [ ] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [x] Complexity deviations documented

---
*Based on Constitution v2.1.1 - See `/memory/constitution.md`*