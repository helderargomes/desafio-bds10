package com.devsuperior.movieflix.resources.exceptions;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OAuthCustomError implements Serializable {
	private static final long serialVersionUID = 1L;

	private String error;
	
	@JsonProperty("error_description")
	private String errorDescription;

	public OAuthCustomError() {

	}

	public OAuthCustomError(String error, String error_description) {
		this.error = error;
		this.errorDescription = error_description;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	public String getError_description() {
		return errorDescription;
	}

	public void setError_description(String error_description) {
		this.errorDescription = error_description;
	}
		
}
