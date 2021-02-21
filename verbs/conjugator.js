/*
    Conjugations in the imperfective and perfective tenses
    Causative verbs in mā- are included but not those in mās-
    Negative conjugations have not been implemented yet
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
mā12a2 ā1a2a2 ā1a2 \
mā1a2 ā11a2 ā12 \
mā11a2 ā11a2 ā11e2'


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

    verb = verb.join('')


    // Process #2
    var causative = false
    var type = ''


    return verb

}

console.log(imperfect("መፈለ.ግ"))