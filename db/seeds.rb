# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

10.times do |i|
    p = Project.create(
        title: "Project #{i + 1}",
        description: "I am a project! I show that you have relevant experience!",
    )
    p.image.attach(
      io:  File.open(File.join(Rails.root,'app/assets/images/dummy_project_images/dummy.jpg')),
      filename: 'dummy.jpg'
    )
end 
