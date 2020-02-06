CREATE TABLE "kb_years" (
	"rowid"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"year"	INTEGER NOT NULL,
	"movie"	TEXT NOT NULL,
	"boxoffice"	NUMERIC NOT NULL
);

CREATE UNIQUE INDEX "kb_years_idx" ON "kb_years" (
	"year"	ASC,
	"movie"	ASC
);