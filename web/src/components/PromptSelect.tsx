import { useEffect, useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../components/ui/select";
import { api } from "@/lib/axios";

interface PromptSelectProps {
	onPromptSelected: (template: string) => void;
}

interface Prompt {
	id: string;
	title: string;
	template: string;
}

export function PrompSelect(props: PromptSelectProps) {
	const [prompts, setPrompts] = useState<Prompt[] | null>(null);

	useEffect(() => {
		api.get("/prompts").then((response) => {
			setPrompts(response.data);
		});
	}, []);

	function handlePromptSelected(promptId: string) {
		const selectedPrompt = prompts?.find((prompt) => prompt.id == promptId);

		if (!selectedPrompt) {
			return;
		}

		props.onPromptSelected(selectedPrompt.template);
	}

	return (
		<Select onValueChange={handlePromptSelected}>
			<SelectTrigger>
				<SelectValue placeholder="Selecione o prompt..." />
			</SelectTrigger>

			<SelectContent>
				{prompts?.map((prompt) => (
					<SelectItem value={prompt.id} key={prompt.id}>
						{prompt.title}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
