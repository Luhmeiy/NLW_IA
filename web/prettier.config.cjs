module.exports = {
	plugins: ["prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: ["*cjs", "*.js", "*.ts", "*.tsx", "*.scss"],
			options: {
				tabWidth: 4,
				useTabs: true,
			},
		},
	],
};
