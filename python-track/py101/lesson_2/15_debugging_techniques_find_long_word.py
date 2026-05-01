def find_long_word(sentence):
    words = sentence.split()
    long_word = ''
    for word in words:
        print(word)
        if len(word) > 5:
            long_word = word
    return long_word

print(find_long_word("The quickest brown fox is jumping over the lazy dog"))