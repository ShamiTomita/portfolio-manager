class ProjectController < ApplicationController
  before_action :set_project, only: %i[show, destroy]

  def index
    projects = Project.all.order(created_at: :desc)
    render json: projects
  end

  def new 
    @project = Project.new
  end 

  def create
    project = Project.create!(project_params)
    if project 
        render json: project 
    else 
      render json: project.errors
    end 
  end

  def show
    render json: @project
  end

  def destroy
    @project&.destroy
    render json: { message: 'Project deleted'} 
  end

  private 
  def project_params
    params.permit(:title, :description, :image, :links)
  end 

  def set_project 
    @project = Project.find(params[:id])
  end 
end
