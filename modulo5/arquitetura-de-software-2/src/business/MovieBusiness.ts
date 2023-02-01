import { MovieDatabase } from "../data/MovieDatabase"
import { v4 as generateId } from 'uuid'
import { CustomError } from "../error/CustomError"

export class MovieBusiness {
  async create({ title, description, duration_in_minutes, year_of_release }: any):Promise<void> {
    if (!title || !description || !duration_in_minutes || !year_of_release) {
      throw new Error("Dados inválidos (title, description, duration (in minutes), release (year))")
    }

    const id = generateId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
        id,
        title, 
        description, 
        duration_in_minutes, 
        year_of_release
    })
  }

  public getMovies = async () => {
    try {
       const movieDatabase = new MovieDatabase()
       return await MovieDatabase.getMovies()
    } catch (error: any) {
       throw new CustomError(error.statuscode, error.message)
    }
 }
}