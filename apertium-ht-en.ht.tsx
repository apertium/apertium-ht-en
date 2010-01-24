<?xml version="1.0" encoding="UTF-8"?>
<tagger name="haitian creole">
<tagset>
  <def-label name="CNJCOO" closed="true">
    <tags-item tags="cnjcoo"/>
  </def-label> 
  <def-label name="CNJADV" closed="true">
    <tags-item tags="cnjadv"/>
  </def-label> 
  <def-label name="CNJSUB" closed="true">
    <tags-item tags="cnjsub"/>
  </def-label> 
  <def-label name="IJ">
    <tags-item tags="ij"/>
  </def-label> 
  <def-label name="ADV">
    <tags-item tags="adv"/>
  </def-label> 
  <def-label name="PREADV">
    <tags-item tags="preadv"/>
  </def-label> 
  <def-label name="ADJ">
    <tags-item tags="adj"/>
  </def-label> 
  <def-label name="NOM">
    <tags-item tags="n"/>
  </def-label> 
  <def-label name="NUM">
    <tags-item tags="num"/>
  </def-label> 
  <def-label name="SER" closed="true">
    <tags-item tags="vbser.past"/>
    <tags-item tags="vbser.pres"/>
  </def-label>
  <def-label name="REL" closed="true">
    <tags-item tags="rel.an.mf.sp"/>
  </def-label>
  <def-label name="PART" closed="true">
    <tags-item tags="part"/>
  </def-label>
  <def-label name="AUX" closed="true">
    <tags-item tags="vaux"/>
  </def-label>
  <def-label name="HAVER" closed="true">
    <tags-item tags="vbhaver"/>
  </def-label>
  <def-label name="VBMOD" closed="true">
    <tags-item tags="vbmod"/>
  </def-label>
  <def-label name="VBLEX">
    <tags-item tags="vblex"/>
  </def-label> 
  <def-label name="PR" closed="true">
    <tags-item tags="pr"/>
  </def-label> 
  <def-label name="ANTROPONIM">
    <tags-item tags="np.ant.*"/>
  </def-label>
  <def-label name="COGNOMEN">
    <tags-item tags="np.cog.*"/>
  </def-label>
  <def-label name="TOPONIM">
    <tags-item tags="np.top"/>
  </def-label>
  <def-label name="NPALTRES">
    <tags-item tags="np.al.*"/>
  </def-label>
  <def-label name="PREDET" closed="true">
    <tags-item tags="predet.*"/>
  </def-label>
  <def-label name="POSTDET" closed="true">
    <tags-item tags="postdet.*"/>
    <tags-item lemma="sa" tags="det.dem.*"/>
  </def-label>
  <def-label name="DETPOS" closed="true">
    <tags-item tags="det.pos.*"/>
  </def-label>
  <def-label name="PRNPERS" closed="true">
    <tags-item lemma="prpers" tags="prn.ind.*"/>
  </def-label>
  <def-label name="PRNPERSUNS" closed="true">
    <tags-item lemma="prpers" tags="prn.uns.*"/>
  </def-label>
  <def-label name="INTADV" closed="true">
    <tags-item tags="adv.itg"/>
  </def-label>
  <def-label name="ORD" closed="true">
    <tags-item tags="det.ord.sp"/>
    <tags-item tags="num.ord"/>
  </def-label>
  <def-label name="DET" closed="true">
    <tags-item tags="det.dem.*"/>
    <tags-item tags="det.ind.*"/>
    <tags-item tags="det.qnt.*"/>
    <tags-item tags="det.def.*"/>
    <tags-item tags="det.pos.*"/>
    <tags-item tags="det.itg.*"/> 
    <tags-item tags="det.ord.*"/> 
  </def-label>
  <def-label name="guio" closed="true">
    <tags-item tags="guio"/>
  </def-label>
  <def-label name="lpar" closed="true">
    <tags-item tags="lpar"/>
  </def-label>
  <def-label name="rpar" closed="true">
    <tags-item tags="rpar"/>
  </def-label>
  <def-label name="cm" closed="true">
    <tags-item tags="cm"/>
  </def-label>
  <def-label name="PRNNT" closed="true">
    <tags-item tags="prn.tn.nt.sg"/>
  </def-label>
</tagset>
<forbid>
  <label-sequence>
    <label-item label="NOM"/>
    <label-item label="PRNPERS"/>
  </label-sequence>
  <label-sequence>
    <label-item label="NOM"/>
    <label-item label="PRNPERSUNS"/>
  </label-sequence>
  <label-sequence>
    <label-item label="INTADV"/>
    <label-item label="DETPOS"/>
  </label-sequence>
  <label-sequence>
    <label-item label="DETPOS"/>
    <label-item label="PART"/>
  </label-sequence>
</forbid>
<!--
<enforce-rules>
</enforce-rules>
<preferences>
</preferences>
-->
</tagger>
