
/*
    All consonants are numbers (ma-): Lines 0-7
    Last two letters -at: Lines 8-9
    Last two letters -āt: Lines 10-11
    All consonants are numbers (mā-): Lines 12-14

    Includes tables with germinated consonants and without
*/

var table = 'ma12a3 1a22a3 1a23 \
ma1a2a3 1a22a3 1a22e3 \
ma1a23a4 1a2a33a4 1a2a33e4 \
ma1ā2 1ā2 1e2 \
ma1a2 1a2 1a2 \
ma1é2 1é2 1é2 \
ma1o2 1o2 1o2 \
ma1a2o3 1a22a3 1a22u3 \
ma12at 1a22 1a2 \
ma1a2at 1a22 1a22 \
ma12āt 1a22ā 1a2 \
ma1a2āt 1a22ā 1a22 \
mā1a2 ā11a2 ā12 \
mā11a2 ā11a2 ā11e2 \
ma1a22a3 1a22a3 1a22e3 \
ma1a22o3 1a22a3 1a22u3 \
ma1a22at 1a22 1a22 \
ma1a22āt 1a22ā 1a22'

table = table.split(' ')
