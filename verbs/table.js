/*
    This table gives perfect and imperfect stems of a verb from its infinitive
        - Stems in the perfect require their corresponding ending
        - Stems in the imperfect require their corresponding prefixes and suffixes

    Numbers (1,2,3, and 4) represent consonants in the order that they appear in the infinitive form
        - If two numbers appear next to each other without a vowel in between, the program will
          automatically add 'e' for transliteration purposes
        - The pronounciation of such sounds is not marked
            - It is only pronounced in 4 verb types
        - If a number is doubled (e.g 22--not like 2e2), it implies a germinated consonant
            - Germinated consonants are repsented with the Amharic character followed by an apostrophe
              (') in the program and should be entered as such

    Causative verbs in mā- derived from verbs in ma- are not included
        - To conjugate these types of verbs, simply add -ā to the corresponding stem of a verb in ma-
*/

table = 'ma12a3 1a22a3 1a23 \
ma1a22a3 1a22a3 1a22e3 \
ma12āt 1a22ā 1a2 \
ma1a22āt 1a22ā 1a22 \
ma12at 1a22 1a2 \
ma1a22at 1a22 1a22 \
mā1a2 ā11a2 ā12 \
mā11a2 ā11a2 ā11e2 \
ma1a23a4 1a2a33a4 1a2a33e4 \
ma1ā2 1ā2 1e2 \
ma1a2 1a2 1a2 \
ma1é2 1é2 1é2 \
ma1o2 1o2 1o2 \
mā12a2 ā1a2a2 ā1a2 \
ma1a22o3 1a22a3 1a22u3'