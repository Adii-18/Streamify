import { Injectable } from '@angular/core';
import axios from 'axios';
import { Movie, MovieDetail } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly API_KEY = `157f9eb7`;

  constructor() { }

  async searchMovie(searchQuery: string): Promise<Array<Movie>> {
    try {
      const response = await axios.get(`https://omdbapi.com/?apikey=${this.API_KEY}&s=${searchQuery}`);
      return response.data.Search;
    } catch (error) {
      console.error('Error fetching movie search results:', error);
      throw error;
    }
  }

  async getMovieDetails(imdbId: string): Promise<MovieDetail> {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${imdbId}&plot=full`);
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  }
}