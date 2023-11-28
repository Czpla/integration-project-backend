export interface DeleteTeacherByIdRepository {
    deleteById(id: string): Promise<void>;
}
