"use client"

import { useDark } from "@/hooks/useDark"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
	const [, toggleDark] = useDark()

	return (
		<Button variant="ghost" size="sm" className="text-2xl" onClick={toggleDark}>
			<div className="i-carbon-sun rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<div className="i-carbon-moon absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
