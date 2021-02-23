/*
    Conjugations in the imperfective and perfective tenses
    Causative verbs in mā- are included but not those in mās-
    Negative conjugations have not been implemented yet

    From fidal.js
*/

var fidal = 'ሀ ha ሁ hu ሂ hi ሃ hā ሄ hé ህ he ሆ ho \
ለ la ሉ lu ሊ li ላ lā ሌ lé ል le ሎ lo \
ሐ ca ሑ cu ሒ ci ሓ cā ሔ cé ሕ ce ሖ co \
መ ma ሙ mu ሚ mi ማ mā ሜ mé ም me ሞ mo \
ሠ śa ሡ śu ሢ śi ሣ śā ሤ śé ሥ śe ሦ śo \
ረ ra ሩ ru ሪ ri ራ rā ሬ ré ር re ሮ ro \
ሰ sa ሱ su ሲ si ሳ sā ሴ sé ስ se ሶ so \
ሸ ša ሹ šu ሺ ši ሻ šā ሼ šé ሽ še ሾ šo \
ቀ qa ቁ qu ቂ qi ቃ qā ቄ qé ቅ qe ቆ qo \
በ ba ቡ bu ቢ bi ባ bā ቤ bé ብ be ቦ bo \
ተ ta ቱ tu ቲ ti ታ tā ቴ té ት te ቶ to \
ቸ ča ቹ ču ቺ či ቻ čā ቼ čé ች če ቾ čo \
ኀ Ha ኁ Hu ኂ Hi ኃ Hā ኄ Hé ኅ He ኆ Ho \
ነ na ኑ nu ኒ ni ና nā ኔ né ን ne ኖ no \
ኘ ña ኙ ñu ኚ ñi ኛ ñā ኜ ñé ኝ ñe ኞ ño \
አ ʼa ኡ ʼu ኢ ʼi ኣ ʼā ኤ ʼé እ ʼe ኦ ʼo \
ከ ka ኩ ku ኪ ki ካ kā ኬ ké ክ ke ኮ ko \
ኸ xa ኹ xu ኺ xi ኻ xā ኼ xé ኽ xe ኾ xo \
ወ wa ዉ wu ዊ wi ዋ wā ዌ wé ው we ዎ wo \
ዐ ~a ዑ ~u ዒ ~i ዓ ~ā ዔ ~é ዕ ~e ዖ ~o \
ዘ za ዙ zu ዚ zi ዛ zā ዜ zé ዝ ze ዞ zo \
ዠ ža ዡ žu ዢ ži ዣ žā ዤ žé ዥ,ዥ že ዦ žo \
የ ya ዩ yu ዪ yi ያ yā ዬ yé ይ ye ዮ yo \
ደ da ዱ du ዲ di ዳ dā ዴ dé ድ de ዶ do \
ጀ ja ጁ ju ጂ ji ጃ jā ጄ jé ጅ je ጆ jo \
ገ ga ጉ gu ጊ gi ጋ gā ጌ gé ግ ge ጎ go \
ጠ Ta ጡ Tu ጢ Ti ጣ Tā ጤ Té ጥ Te ጦ To \
ጨ ċa ጩ ċu ጪ ċi ጫ ċā ጬ ċé ጭ ċe ጮ ċo \
ጰ Pa ጱ Pu ጲ Pi ጳ Pā ጴ Pé ጵ Pe ጶ Po \
ጸ Sa ጹ Su ጺ Si ጻ Sā ጼ Sé ጽ Se ጾ So \
ፀ ṡa ፁ ṡu ፂ ṡi ፃ ṡā ፄ ṡé ፅ ṡe ፆ ṡo \
ፈ fa ፉ fu ፊ fi ፋ fā ፌ fé ፍ fe ፎ fo \
ፐ pa ፑ pu ፒ pi ፓ pā ፔ pé ፕ pe ፖ po \
ቨ va ቩ vu ቪ vi ቫ vā ቬ vé ቭ ve ቮ vo'

fidal = fidal.split(' ')


/*
    All consonants are numbers (ma-): Lines 0-7
    Last two letters -at: Lines 8-9
    Last two letters -āt: Lines 10-11
    All consonants are numbers (mā-): Lines 12-14

    From table.js
*/
var table = 'ma12a3 1a22a3 1a23 \
ma1a22a3 1a22a3 1a22e3 \
ma1a23a4 1a2a33a4 1a2a33e4 \
ma1ā2 1ā2 1e2 \
ma1a2 1a2 1a2 \
ma1é2 1é2 1é2 \
ma1o2 1o2 1o2 \
ma1a22o3 1a22a3 1a22u3 \
ma12at 1a22 1a2 \
ma1a22at 1a22 1a22 \
ma12āt 1a22ā 1a2 \
ma1a22āt 1a22ā 1a22 \
mā1a2 ā11a2 ā12 \
mā11a2 ā11a2 ā11e2'

table = table.split(' ')


/*
    From fidal-vowels.js
*/
var vowels = ['a', 'u', 'i', 'ā', 'é', 'e', 'o']


/* 
    Prefixes and suffixes for the imperfective tense
    Prefixes for imperfective tense
        - with a vowel, without a vowel, suffix
    Suffixes for the perfective tense
        - Some suffixes have multiple forms (each is used for a certain case)
        - The last two suffixes replace the last vowel if it exists

    From endings.js
*/

var imperfective = ["እኔ", "", "ʼe", "āl.ahu", "አንተ", "t", "te", "āl.ahe", "አንቺ", "t", "te", "iyāl.aše", "እሱ", "y", "ye", "āle", "እሷ", "t", "te", "āl.ače", "እኛ", "en", "en.e", "āl.ane", "እናንተ", "t", "te", "āl.āč.ehu", "እነሱ", "y", "ye", "āl.u"]

var perfective = ["እኔ", "ehu, eku", "አንተ", "eh, ek", "አንቺ", "eš", "እሱ", "a", "እሷ", "ač, eč", "እኛ", "en", "እናንተ", "ač.ehu", "እነሱ", "u"]


var prettify = function(amharic_text) {

    output = amharic_text.split('')
    for ( var i = 0; i < output.length - 1; i++ ) {
        if ( output[i + 1] != '.' ) {
            output.splice(i + 1, 0, ' ')
            i++
        }
    }

    console.log(output.join(''))

}


var imperfect = function(amharic_verb, subject) {
    /* 
        PARAMETERS:
        amharic_verb: verb in Amharic characters and a period (.) to indicate germinated consonants
        subject: subject, one of the eight basic Amharic pronouns (polite pronouns not included) written
                 in the Amharic script

        PROCESS:
        1. amharic_verb --> Transliteration --> transliterated verb (verb)
        2. verb --> Type Identification --> verb type
        3. verb, verb type --> Converter --> stem
        4. stem, subject --> Conjugator --> verb with prefixes and suffixes (result)
        5. result --> De-Transliteration --> result in Amharic characters
        
        RETURN:
        return: conjugated verb in the imperfect written in Amharic characters
    */

    // Process #1
    verb = []
    amharic_verb = amharic_verb.split('')

    // Transliteration
    for ( var i = 0; i < amharic_verb.length; i++ ) {
        for ( var j = 0; j < fidal.length; j++ ) {

            if ( amharic_verb[i] == "." ){
                verb.splice(2 * i - 1, 0, '.')
                break
            }
            else if ( fidal[j] == amharic_verb[i] ){
                verb.push(fidal[j + 1].split('')[0])
                verb.push(fidal[j + 1].split('')[1])
                break
            }

        }
    }


    // Process #2
    var type = []
    var consonants = []
    var cons_no = 1

    // Type Identification
    if ( verb[1] == 'ā' ) {  // mā- verb type (or causative verb in ma-)
        
        type = ['m', 'ā']
        var at_verb = false  // if any of these flags are true, it is assumed the verb is causative
        var et_verb = false
        var end = 1

        if ( verb[verb.length - 3] == 'ā' && verb[verb.length - 2] == 't' ) {
            end = 3
            at_verb = true
        }
        if ( verb[verb.length - 3] == 'a' && verb[verb.length - 2] == 't' ) {
            end = 3
            et_verb = true
        }

        for ( var i = 2; i < verb.length - end; i++ ) {

            //detect if letter is consonant
            var is_cons = true
            for ( var j = 0; j < vowels.length; j++ ) {
                if ( verb[i] == vowels[j] ) {
                    is_cons = false
                }
            }

            if ( is_cons && verb[i] != '.' ) {  // consonant
                consonants.push(verb[i])  // add verb to consonants list
                type.push(cons_no)  // add consonant placement number to type
                cons_no++  // change consonant number for next consonant
            }
            else if ( verb[i] == '.' ) {  // germinated consonant
                type.push(cons_no - 1)  // add previous consonant placement number to type to represent germinated consanant
            }
            else if ( verb[i] == 'e' ) {  // 'e' vowel (consonant seperator -- not included in table)
                // don't do anything
            }
            else {  // vowel that is not 'e'
                type.push(verb[i])  // add vowel to type (placement is irrelevant for vowels)
            }

        }

        if ( at_verb ) {
            type.push('ā')
            type.push('t')         
        }
        else if ( et_verb ) {
            type.push('a')
            type.push('t')
        }

    }
    else if ( verb[verb.length - 3] == 'a' && verb[verb.length - 2] == 't' ) {  // -at verb type
       
        type = ['m', 'a']
        for ( var i = 2; i < verb.length - 3; i++ ) {

            //detect if letter is consonant
            var is_cons = true
            for ( var j = 0; j < vowels.length; j++ ) {
                if ( verb[i] == vowels[j] ) {
                    is_cons = false
                }
            }

            if ( is_cons && verb[i] != '.' ) {  // consonant
                consonants.push(verb[i])  // add verb to consonants list
                type.push(cons_no)  // add consonant placement number to type
                cons_no++  // change consonant number for next consonant
            }
            else if ( verb[i] == '.' ) {  // germinated consonant
                type.push(cons_no - 1)  // add previous consonant placement number to type to represent germinated consanant
            }
            else if ( verb[i] == 'e' ) {  // 'e' vowel (consonant seperator -- not included in table)
                // don't do anything
            }
            else {  // vowel that is not 'e'
                type.push(verb[i])  // add vowel to type (placement is irrelevant for vowels)
            }

        }

        type.push('a')
        type.push('t')

    }
    else if ( verb[verb.length - 3] == 'ā' && verb[verb.length - 2] == 't' ) {  // -āt verb type

        type = ['m', 'a']
        for ( var i = 2; i < verb.length - 3; i++ ) {

            //detect if letter is consonant
            var is_cons = true
            for ( var j = 0; j < vowels.length; j++ ) {
                if ( verb[i] == vowels[j] ) {
                    is_cons = false
                }
            }

            if ( is_cons && verb[i] != '.' ) {  // consonant
                consonants.push(verb[i])  // add verb to consonants list
                type.push(cons_no)  // add consonant placement number to type
                cons_no++  // change consonant number for next consonant
            }
            else if ( verb[i] == '.' ) {  // germinated consonant
                type.push(cons_no - 1)  // add previous consonant placement number to type to represent germinated consanant
            }
            else if ( verb[i] == 'e' ) {  // 'e' vowel (consonant seperator -- not included in table)
                // don't do anything
            }
            else {  // vowel that is not 'e'
                type.push(verb[i])  // add vowel to type (placement is irrelevant for vowels)
            }

        }

        type.push('ā')
        type.push('t')

    }
    else {  // regular ma- verb type

        type = ['m', 'a']
        for ( var i = 2; i < verb.length - 1; i++ ) {

            //detect if letter is consonant
            var is_cons = true
            for ( var j = 0; j < vowels.length; j++ ) {
                if ( verb[i] == vowels[j] ) {
                    is_cons = false
                }
            }

            if ( is_cons && verb[i] != '.' ) {  // consonant
                consonants.push(verb[i])  // add verb to consonants list
                type.push(cons_no)  // add consonant placement number to type
                cons_no++  // change consonant number for next consonant
            }
            else if ( verb[i] == '.' ) {  // germinated consonant
                type.push(cons_no - 1)  // add previous consonant placement number to type to represent germinated consanant
            }
            else if ( verb[i] == 'e' ) {  // 'e' vowel (consonant seperator -- not included in table)
                // don't do anything
            }
            else {  // vowel that is not 'e'
                type.push(verb[i])  // add vowel to type (placement is irrelevant for vowels)
            }

        }

    }

    type = type.join('')


    // Process #3
    var stem_formula = ''
    var stem = []

    // Stem Getter
    for ( var i = 0; i < table.length; i+=3) {
        if ( type == table[i] ) {
            stem_formula = table[i + 2]  // imperfect stem formula
            break
        }
    }

    if ( stem_formula == '' ) {  // assumes this must mean verb is causative in mā-
        
        type = type.split('')
        type[1] = 'a'
        type = type.join('')

        for ( var i = 0; i < table.length; i+=3) {
            if ( type == table[i] ) {
                stem_formula = table[i + 2]  // imperfect stem formula
                break
            }
        }

        stem_formula = 'ā' + stem_formula  // add ā- to stem
    
    }

    stem_formula = stem_formula.split('')
    for ( var i = 0; i < stem_formula.length; i++ ) {

        if ( stem_formula[i] == stem_formula[i - 1] ) {  // germinated consonant
            stem.push('.')  // add period indicating germinated consonant
        }
        else if ( parseInt(stem_formula[i]) && parseInt(stem_formula[i - 1]) ) {  // 2 consonants in a row
            if ( consonants[parseInt(stem_formula[i]) - 1] == consonants[parseInt(stem_formula[i - 1]) - 1] ) {  // same consonant
                stem_formula.push('.')  // germinate consonants instead of doubling
            }
            else {  // different consonants
                stem.push('e')  // add seperator vowel 
                stem.push(consonants[parseInt(stem_formula[i]) - 1])  // add correct consonant
            }
        }
        else if ( parseInt(stem_formula[i]) ) {  // consonant, no 2 consonants in a row
            stem.push(consonants[parseInt(stem_formula[i]) - 1])  // add correct consonant
        }
        else {  // vowel
            stem.push(stem_formula[i])  // add vowel as written in the stem formula
        }

    }


    // Process #4
    var result = stem

    // Conjugation
    for ( var i = 0; i < imperfective.length; i+=4 ) {
        if ( imperfective[i] == subject ) {

            // prefixing
            var start_vowel = false
            for ( var j = 0; j < vowels.length; j++ ) {
                if ( result[0] == vowels[j] ) {
                    start_vowel = true
                    break
                }
            }

            if ( start_vowel ) {
                result.splice(0, 0, ...imperfective[i + 1].split(''))
            }
            else {
                result.splice(0, 0, ...imperfective[i + 2].split(''))
            }

            //suffixing
            result.push(...imperfective[i + 3].split(''))

            if ( subject == "አንቺ" ) {

                if ( result[result.length - 9] == 't' ) {
                    result.splice(result.length - 9, 3, 'č') 
                }
                else if (result[result.length - 10] == 't' && result[result.length - 9] == '.') {
                    result.splice(result.length - 10, 4, 'č', '.')
                }

                if ( result[result.length - 9] == 'd' ) {
                    result.splice(result.length - 9, 3, 'j')
                }
                else if (result[result.length - 10] == 'd' && result[result.length - 9] == '.') {
                    result.splice(result.length - 10, 4, 'j', '.')
                }

                if ( result[result.length - 9] == 'T' || result[result.length - 9] == 'S' || result[result.length - 9] == 'ṡ' ) {
                    result.splice(result.length - 9, 3, 'ċ') 
                }
                else if (result[result.length - 10] == 'T' && result[result.length - 9] == '.' || result[result.length - 10] == 'S' && result[result.length - 9] == '.' || result[result.length - 10] == 'ṡ' && result[result.length - 9] == '.' ) {
                    result.splice(result.length - 10, 4, 'ċ', '.')
                }

                if ( result[result.length - 9] == 's' ) {
                    result.splice(result.length - 9, 3, 'š') 
                }
                else if (result[result.length - 10] == 's' && result[result.length - 9] == '.') {
                    result.splice(result.length - 10, 4, 'š', '.')
                }

                if ( result[result.length - 9] == 'z' ) {
                    result.splice(result.length - 9, 3, 'ž') 
                }
                else if (result[result.length - 10] == 'z' && result[result.length - 9] == '.') {
                    result.splice(result.length - 10, 4, 'ž', '.')
                }

                if ( result[result.length - 9] == 'n' ) {
                    result.splice(result.length - 9, 3, 'ñ') 
                }
                else if (result[result.length - 10] == 'n' && result[result.length - 9] == '.') {
                    result.splice(result.length - 10, 4, 'ñ', '.')
                }

                if ( result[result.length - 9] == 'l' ) {
                    result.splice(result.length - 9, 3, 'y') 
                }
                else if (result[result.length - 10] == 'l' && result[result.length - 9] == '.') {
                    result.splice(result.length - 10, 4, 'y', '.')
                }

            }

        }
    }


    // Process #5
    var output = []
    var memory = ''
    var germinated_memory = false
 
    for ( var i = 0; i < result.length; i++ ) {

        var is_vowel = false
        for ( var j = 0; j < vowels.length; j++ ) {
            if ( vowels[j] == result[i] ) {
                is_vowel = true
            }
        }

        if ( !is_vowel && result[i] != '.' ) {  // is consonant
            memory = result[i]
        }
        else if ( result[i] == '.' ) {  // germinated consonant
            germinated_memory = true
        }
        else {  // is vowel
            
            char = memory + result[i]
            for ( var j = 1; j < fidal.length; j+=2 ) {
                if ( char == fidal[j] ) {
                    output.push(fidal[j - 1])
                    break
                }
            }

            if ( germinated_memory ) {
                output.push('.')
            }

            memory = ''
            germinated_memory = false

        }

    }

    output = output.join('')
    return output

}


// TESTING SCRIPTS
/*
prettify(imperfect("መልበስ", "እኔ"))
prettify(imperfect("መፈለ.ግ", "አንተ"))
prettify(imperfect("መመንዘር", "አንቺ"))
prettify(imperfect("ማወቅ", "እሱ"))
prettify(imperfect("ማደ.ስ", "እሷ"))
prettify(imperfect("መግባት", "እኛ"))
prettify(imperfect("መጠጣ.ት", "እናንተ"))
prettify(imperfect("መምሸት", "እነሱ"))
prettify(imperfect("መበዠ.ት", "እኔ"))
prettify(imperfect("ማንበብ", "አንተ"))
prettify(imperfect("ማድረስ", "አንቺ"))
prettify(imperfect("መሮጥ", "አንቺ"))
prettify(imperfect("መሄድ", "አንቺ"))
prettify(imperfect("ማጥናት", "እሱ"))
prettify(imperfect("መደብደብ", "እነሱ"))
*/

prettify(imperfect("", ""))
