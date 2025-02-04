 export type User = {
    id: string
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string
};
export type Recipe = {
    id: number,
    title: string,
    description: string,
    authorId: number,
    ingredients:string[],
    instructions:string
}
export type Action = {
    type: 'CREATE' | 'UPDATE' | 'DELETE',
    data: Partial<User>
}