# Write a program which, given a dictionary, generates two output files, 'sequences'
# and 'words'. 'sequences' should contain every sequence of four letters that appears
# in exactly one word of the dictionary, one sequence per line. 'words' should contain
# the corresponding words that contain the sequences, in the same order, again one
# per line.

# Object to store the sequences
sequences = {}

# Iterate through words finding sequences, storing the words they appear in.
File.foreach('dictionary.txt').with_index do |line, line_num|
  for i in 0...line.length-4
    sequence = line[i...i+4]
    sequences[sequence] = (sequences[sequence] ||= []) << line
  end
end

sequences.sort.each do |key, value|
  if value.length == 1
    puts "#{key} #{value[0]}"
  end
end
