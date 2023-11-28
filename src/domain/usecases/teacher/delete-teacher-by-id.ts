export interface DeleteTeacherById {
    delete(id: string): Promise<void>;
}
