# Todo Project Phase 2 - Monorepo Structure

## Project Layout

```
todo-project/
├── .specify/                 # Specification kit configuration
│   ├── memory/               # Project memory (constitution, etc.)
│   │   └── constitution.md
│   ├── scripts/              # Specification scripts
│   └── templates/            # Specification templates
├── specs/                    # Project specifications
│   ├── history/              # Historical spec versions
│   │   └── speckit.history.log
│   └── todo-project-phase2/  # Phase 2 specifications
│       ├── sp.specify.md     # Project specification
│       ├── sp.plan.md        # Project plan
│       └── sp.tasks.md       # Project tasks
├── apps/                     # Application packages
│   ├── frontend/             # Next.js frontend application
│   │   ├── pages/            # Next.js pages directory
│   │   ├── components/       # React components
│   │   ├── styles/           # CSS and styling
│   │   ├── public/           # Static assets
│   │   ├── lib/              # Utility functions
│   │   ├── hooks/            # Custom React hooks
│   │   ├── contexts/         # React contexts
│   │   ├── types/            # TypeScript type definitions
│   │   ├── .env.example      # Environment variables example
│   │   ├── next.config.js    # Next.js configuration
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── backend/              # FastAPI backend application
│       ├── app/              # Main application code
│       │   ├── main.py       # Application entry point
│       │   ├── api/          # API routes
│       │   │   ├── deps.py   # Dependency injection
│       │   │   ├── auth.py   # Authentication endpoints
│       │   │   ├── todos.py  # Todo endpoints
│       │   │   └── users.py  # User endpoints
│       │   ├── models/       # Data models (SQLModel)
│       │   │   ├── user.py
│       │   │   ├── todo.py
│       │   │   └── base.py
│       │   ├── schemas/      # Pydantic schemas
│       │   │   ├── user.py
│       │   │   ├── todo.py
│       │   │   └── auth.py
│       │   ├── database/     # Database configuration
│       │   │   ├── engine.py
│       │   │   └── session.py
│       │   ├── auth/         # Authentication logic
│       │   │   └── security.py
│       │   └── config/       # Configuration settings
│       ├── tests/            # Backend tests
│       │   ├── conftest.py
│       │   ├── test_auth.py
│       │   ├── test_todos.py
│       │   └── test_users.py
│       ├── .env.example      # Environment variables example
│       ├── requirements.txt  # Python dependencies
│       └── alembic/          # Database migration files
│           ├── env.py
│           ├── script.py.mako
│           └── versions/
├── packages/                 # Shared packages (if any)
│   └── types/                # Shared TypeScript types
├── docs/                     # Documentation
│   └── README.md
├── .gitignore
├── README.md
├── package.json              # Root package.json for monorepo
├── pnpm-workspace.yaml       # Workspace configuration (if using pnpm)
└── pyproject.toml            # Python project configuration
```

## Key Directories Explained

### `.specify/`
- Contains configuration for the Specification Kit Plus workflow
- Stores project memory including the constitution

### `specs/`
- Houses all project specifications, plans, and tasks
- Includes historical versions of specifications
- Organized by feature/phase

### `apps/`
- Contains the main applications in the monorepo
- Frontend (Next.js) and Backend (FastAPI) applications
- Each app is self-contained with its own dependencies

### `packages/`
- Shared libraries and packages used across applications
- Could include shared types, utilities, or components

### `docs/`
- Project documentation
- Architecture decisions, runbooks, etc.