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
  <def-label name="ADJ">
    <tags-item tags="adj"/>
  </def-label> 
  <def-label name="NOM">
    <tags-item tags="n"/>
  </def-label> 
  <def-label name="VBLEX">
    <tags-item tags="vblex"/>
  </def-label> 
  <def-label name="PR" closed="true">
    <tags-item tags="pr"/>
  </def-label> 
  <def-label name="ANTROPONIM">
    <tags-item tags="np.ant"/>
  </def-label>
  <def-label name="TOPONIM">
    <tags-item tags="np.top"/>
  </def-label>
  <def-label name="NPALTRES">
    <tags-item tags="np.al"/>
  </def-label>
  <def-label name="PREDET" closed="true">
    <tags-item tags="predet.*"/>
  </def-label>
  <def-label name="POSTDET" closed="true">
    <tags-item tags="postdet.*"/>
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
  <def-label name="DET" closed="true">
    <tags-item tags="det.dem.*"/>
    <tags-item tags="det.ind.*"/>
    <tags-item tags="det.def.*"/>
    <tags-item tags="det.pos.*"/>
    <tags-item tags="det.itg.*"/> 
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
</forbid>
<enforce-rules>
</enforce-rules>
<preferences>
</preferences>
</tagger>
