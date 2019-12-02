class ApplicationController < JSONAPI::ResourceController
	include Pundit

	protect_from_forgery with: :null_session

	rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
	rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

	def render_unprocessable_entity_response(exception)
		render json: exception.record.errors, status: :unprocessable_entity
	end

	def render_not_found_response(exception)
		data = {
			:title  => "Record not found",
			:detail => "The #{exception.model} identified by #{model.id} could not be found",
			:code   => :not_found,
			:status => :not_found
		}

		render json: { errors : [data] }, status: :not_found
	end
end