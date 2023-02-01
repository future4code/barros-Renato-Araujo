import { CustomError } from "../error/CustomError";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create({
    id,
    title,
    description,
    duration_in_minutes,
    year_of_release,
  }: any): Promise<void> {
    await MovieDatabase.connection
      .insert({
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release,
      })
      .into(MovieDatabase.TABLE_NAME);
  }

  public static getMovies = async () => {
    try {
      MovieDatabase.connection.initialize();
      const allMovies = await MovieDatabase.connection
        .select()
        .from(MovieDatabase.TABLE_NAME);
      return allMovies;
    } catch (error: any) {
      throw new CustomError(error.statuscode, error.message)
    } finally {
      console.log("conexão encerrada!");
      MovieDatabase.connection.destroy();
    }
  };
}