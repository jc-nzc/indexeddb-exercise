#https://mixandgo.com/learn/how-to-use-ruby-each

list = [1,2,3,4,5,6,7,8,9,10]
puts list.select(&:even?)
puts "__"
numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.each{ |n| puts "Current number is: #{n}" }
