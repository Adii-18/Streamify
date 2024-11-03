import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  searchQuery = '';
  movies: Movie[] = [];
  loading = false;
  error = '';

  constructor(private movieService: MovieService) { }

  async searchMovies() {
    this.loading = true;
    this.error = ''; 
    try {
      const data = await this.movieService.searchMovie(this.searchQuery); 
      this.movies = data;
    } catch (error) {
      this.error = 'Failed to search movies. Please try again later.';
    } finally {
      this.loading = false;
    }
  }
}