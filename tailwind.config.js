/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.html'],
    theme: {
        extend: {
            typography: ({ theme }) => ({
                amber: {
                    css: {
                        '--tw-prose-body': theme('colors.amber[50]'),
                        '--tw-prose-headings': theme('colors.amber[300]'),
                        '--tw-prose-lead': theme('colors.amber[700]'),
                        '--tw-prose-links': theme('colors.amber[300]'),
                        '--tw-prose-bold': theme('colors.amber[300]'),
                        '--tw-prose-counters': theme('colors.amber[300]'),
                        '--tw-prose-bullets': theme('colors.amber[300]'),
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
