package com.devsuperior.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class ReviewService {
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	
	@Autowired
	private MovieRepository repository;
	
	@Autowired
	private AuthService authService;
	
	@Transactional
	public ReviewDTO insertReview(ReviewDTO dto) {
		authService.validateMember(authService.authenticated().getId());
		Review entity = new Review();
		copyDtoToEntity(dto, entity);
		entity = reviewRepository.save(entity);
		return new ReviewDTO(entity);
				
	}

	private void copyDtoToEntity(ReviewDTO dto, Review entity) {
		Optional<Movie> mov = repository.findById(dto.getMovieId());
		Movie movie = mov.orElseThrow(() -> new ResourceNotFoundException("Movie not found"));
		entity.setMovie(movie);
		entity.setText(dto.getText());
		entity.setUser(authService.authenticated());		
	}

}
