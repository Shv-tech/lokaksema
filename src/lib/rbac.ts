export const Roles = {
USER: "USER",
ORGANIZER: "ORGANIZER",
ADMIN: "ADMIN",
} as const


export const can = {
manageAdmin: (role?: string) => role === Roles.ADMIN || role === Roles.ORGANIZER,
sponsorArea: (role?: string) => [Roles.ADMIN, Roles.ORGANIZER, Roles.USER].includes((role as any) || Roles.USER),
}