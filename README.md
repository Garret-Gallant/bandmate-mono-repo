# README

# Language versions are
* Ruby 2.7.4
* Rails 7.0.4
* React 8.11.0

# Database runs on
* Postgresql 12.12

* When starting the application be sure all versions of your system match

# To Start The Application

* Pull the repo from https://github.com/Garret-Gallant/bandmate-mono-repo
* Run 'bundle install' in the terminal to pull all necessary Ruby dependencies
* Run npm install --prefix frontend to pull all necessary React dependencies

# User Experience

* Bandmate.com summary: 
A browsing resource to find and collaborate with other musicians that are interested in forming a band and outputting music.

# A User Can

* Create a profile
* Upload demo tracks (via demo manager page) and set them as favorites to be seen by other users in the artist browser.
* Search and filter the artist browser depending on genre, usernames, favorites/all, etc.
* View the artist browser and all audio files within associated with users.
* View the selected artist profile to check out all demo's uploaded by the selected artist.

# Stretch Goals

* Allow users to create bands together and post album's demo's, etc. under the band name.
* Allow users to DM eachother via websockets.
* Integrate custom audio player so visuals will be better
* Integrate bandcamp to allow bands to post and sell music, merch, etc.

# Technologies used

* Amazon AWS S3 Cloud Storage for hosting all uploaded files remotely.
* Active Storage for Amazon S3 and local hosting mp3/wav files.
* Tailwindcss for styling.




