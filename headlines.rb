require 'rss'

puts "__________CrunchGear"
rss = RSS::Parser.parse('http://feeds.feedburner.com/crunchgear', false)

rss.items.each do |items|
	puts "- #{items.title}"
end

puts
puts

puts "_________StartUps News"

rss = RSS::Parser.parse('http://feeds.feedburner.com/TechCrunch/startups', false)


rss.items.each do |items|
	puts "- #{items.title}"
end

