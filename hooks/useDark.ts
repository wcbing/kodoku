import { useEffect } from "react"
import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { useMedia } from "react-use"

const appearanceAtom = atomWithStorage<"auto" | "light" | "dark">(
	"use-dark",
	"auto"
)

export function useDark() {
	const [setting, setSetting] = useAtom(appearanceAtom)
	const isDark = useMedia("(prefers-color-scheme: dark)")

	useEffect(() => {
		const isDarkMode = setting === "dark" || (isDark && setting !== "light")
		if (isDarkMode) {
			document.documentElement.classList.toggle("dark", true)
		} else {
			document.documentElement.classList.toggle("dark", false)
		}
		if ((setting === "dark" && isDark) || (setting === "light" && !isDark)) {
			setSetting("auto")
		}
	}, [setting, isDark, setSetting])

	const toggleDark = () => {
		if (setting === "auto") {
			setSetting(isDark ? "light" : "dark")
		} else {
			setSetting("auto")
		}
	}

	return [
		setting === "dark" || (isDark && setting !== "light"),
		toggleDark,
	] as const
}
