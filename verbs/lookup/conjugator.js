/*
    From fidal-vowels.js
*/
var vowels = ['a', 'u', 'i', 'ā', 'é', 'e', 'o']


var prettify = function(amharic_text) {

    output = amharic_text.split('')
    for ( var i = 0; i < output.length - 1; i++ ) {
        if ( output[i + 1] != '.' ) {
            output.splice(i + 1, 0, ' ')
            i++
        }
    }

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

        if ( stem_formula ) {
            stem_formula = 'ā' + stem_formula  // add ā- to stem
        }
    
    }

    if ( stem_formula == '' ) {  // uses standard infinitive without the first two letters as stem
        
        // remove me-/ma- prefix
        type = type.split('')
        type.splice(0, 2)
  
        // remove -at suffix
        if ( type[type.length - 2] == 'ā' && type[type.length - 1] == 't' ) {
            type.splice(type.length - 2, 2)
        }

        stem_formula = type.join('')

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

                else if ( result[result.length - 9] == 'd' ) {
                    result.splice(result.length - 9, 3, 'j')
                }
                else if (result[result.length - 10] == 'd' && result[result.length - 9] == '.') {
                    result.splice(result.length - 10, 4, 'j', '.')
                }

                else if ( result[result.length - 9] == 'T' || result[result.length - 9] == 'S' || result[result.length - 9] == 'ṡ' ) {
                    result.splice(result.length - 9, 3, 'ċ') 
                }
                else if (result[result.length - 10] == 'T' && result[result.length - 9] == '.' || result[result.length - 10] == 'S' && result[result.length - 9] == '.' || result[result.length - 10] == 'ṡ' && result[result.length - 9] == '.' ) {
                    result.splice(result.length - 10, 4, 'ċ', '.')
                }

                else if ( result[result.length - 9] == 's' ) {
                    result.splice(result.length - 9, 3, 'š') 
                }
                else if (result[result.length - 10] == 's' && result[result.length - 9] == '.') {
                    result.splice(result.length - 10, 4, 'š', '.')
                }

                else if ( result[result.length - 9] == 'z' ) {
                    result.splice(result.length - 9, 3, 'ž') 
                }
                else if (result[result.length - 10] == 'z' && result[result.length - 9] == '.') {
                    result.splice(result.length - 10, 4, 'ž', '.')
                }

                else if ( result[result.length - 9] == 'n' ) {
                    result.splice(result.length - 9, 3, 'ñ') 
                }
                else if (result[result.length - 10] == 'n' && result[result.length - 9] == '.') {
                    result.splice(result.length - 10, 4, 'ñ', '.')
                }

                else if ( result[result.length - 9] == 'l' ) {
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


var perfect = function(amharic_verb, subject) {
    /* 
        PARAMETERS:
        amharic_verb: verb in Amharic characters and a period (.) to indicate germinated consonants
        subject: subject, one of the eight basic Amharic pronouns (polite pronouns not included) written
                 in the Amharic script

        PROCESS:
        1. amharic_verb --> Transliteration --> transliterated verb (verb)
        2. verb --> Type Identification --> verb type
        3. verb, verb type --> Converter --> stem
        4. stem, subject --> Conjugator --> verb with suffixes (result)
        5. result --> De-Transliteration --> result in Amharic characters
        
        RETURN:
        return: conjugated verb in the perfect tense written in Amharic characters
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
            stem_formula = table[i + 1]  // perfect stem formula
            break
        }
    }

    if ( stem_formula == '' ) {  // assumes this must mean verb is causative in mā-
        
        type = type.split('')
        type[1] = 'a'
        type = type.join('')

        for ( var i = 0; i < table.length; i+=3) {
            if ( type == table[i] ) {
                stem_formula = table[i + 1]  // perfect stem formula
                break
            }
        }

        if ( stem_formula ) {
            stem_formula = 'ʼā' + stem_formula  // add ā- to stem
        }
    
    }

    if ( stem_formula == '' ) {  // uses standard infinitive without the first two letters as stem
        
        // remove me-/ma- prefix
        type = type.split('')
        type.splice(0, 2)
  
        // remove -at suffix
        if ( type[type.length - 2] == 'ā' && type[type.length - 1] == 't' ) {
            type.splice(type.length - 2, 2)
        }

        stem_formula = type.join('')

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
    for ( var i = 0; i < perfective.length; i+=3 ) {
        if ( perfective[i] == subject ) {

            //suffixing
            var final_letter = result[result.length - 1]
            var vowel_end = false
            for ( var j = 0; j < vowels.length; j++ ) {
                if ( final_letter == vowels[j] ) {
                    vowel_end = true
                    break
                }
            }

            if ( subject == "እኔ" || subject == "አንተ" ) {

                if ( vowel_end ) {
                    result.push(...perfective[i + 2].split(''))
                }
                else {

                    var use_h = false
                    if ( final_letter == 'g' || final_letter == 'k' || final_letter == 'q' ) {
                        use_h = true
                    }

                    if ( use_h ) {
                        result.push(...perfective[i + 1].split(',')[0].split(''))
                    }
                    else {
                        result.push(...perfective[i + 1].split(',')[1].split(''))
                    }

                }

            }
            else if ( subject == "እነሱ" ) {
                if ( vowel_end ) {
                    result.splice(result.length - 1, 1, ...perfective[i + 2].split(''))
                }
                else {
                    result.push(...perfective[i + 1].split(''))
                }
            }
            else {
                if ( vowel_end ) {
                    result.push(...perfective[i + 2].split(''))
                }
                else {
                    result.push(...perfective[i + 1].split(''))
                }
            }

        }
    }

    var first_letter = result[0]
    var vowel_start = false
    for ( var i = 0; i < vowels.length; i++ ) {
        if ( first_letter == vowels[i] ) {
            vowel_start = true
        }
    }

    if ( vowel_start ) {
        result.unshift('ʼ')
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
// IMPERFECT
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
// PERFECT
/*
prettify(perfect("መልበስ", "እኔ"))
prettify(perfect("መፈለ.ግ", "አንተ"))
prettify(perfect("መመንዘር", "አንቺ"))
prettify(perfect("ማወቅ", "እሱ"))
prettify(perfect("ማደ.ስ", "እሷ"))
prettify(perfect("መግባት", "እኛ"))
prettify(perfect("መጠጣ.ት", "እናንተ"))
prettify(perfect("መምሸት", "እነሱ"))
prettify(perfect("መበዠ.ት", "እኔ"))
prettify(perfect("ማንበብ", "አንተ"))
prettify(perfect("ማድረስ", "አንቺ"))
prettify(perfect("መሮጥ", "አንቺ"))
prettify(perfect("መሄድ", "አንቺ"))
prettify(perfect("ማጥናት", "እሱ"))
prettify(perfect("መደብደብ", "እነሱ"))
*/
