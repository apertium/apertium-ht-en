VERSION=0.1.0
LANG1=ht
LANG2=en
PREFIX1=$(LANG1)-$(LANG2)
PREFIX2=$(LANG2)-$(LANG1)

BASENAME=apertium-$(PREFIX1)

TARGETS_COMMON = $(PREFIX1).automorf.bin $(PREFIX1).t1x.bin $(PREFIX1).autobil.bin $(PREFIX1).autogen.bin 

modes/$(PREFIX1).mode: modes.xml
	apertium-gen-modes modes.xml
	cp *.mode modes/

$(PREFIX1).automorf.bin: $(BASENAME).$(LANG1).dix
	apertium-validate-dictionary $(BASENAME).$(LANG1).dix
	lt-comp lr $(BASENAME).$(LANG1).dix $@

$(PREFIX1).autobil.bin: $(BASENAME).$(PREFIX1).dix
	apertium-validate-dictionary $(BASENAME).$(PREFIX1).dix
	lt-comp lr $(BASENAME).$(PREFIX1).dix $@

$(PREFIX1).autogen.bin: $(BASENAME).$(LANG2).dix
	apertium-validate-dictionary $(BASENAME).$(LANG2).dix
	lt-comp rl $(BASENAME).$(LANG2).dix $@

$(PREFIX1).t1x.bin: $(BASENAME).$(PREFIX1).t1x
	apertium-validate-transfer $(BASENAME).$(PREFIX1).t1x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX1).t1x $@

EXTRA_DIST=$(BASENAME).$(LANG1).dix $(BASENAME).$(PREFIX1).dix \
	   $(BASENAME).$(LANG2).dix \
           $(PREFIX1).prob \
	   $(BASENAME).$(PREFIX1).t1x \
	   $(BASENAME).$(LANG1).tsx \
	   $(BASENAME).$(LANG2).tsx modes.xml

clean-dicts:
	touch $(BASENAME).$(LANG1).dix $(BASENAME).$(LANG2).dix $(BASENAME).$(PREFIX1).dix
	rm $(BASENAME).$(LANG1).dix
	rm $(BASENAME).$(LANG2).dix
	rm $(BASENAME).$(PREFIX1).dix

apertium_ht_endir=$(prefix)/share/apertium/apertium-$(PREFIX1)/
apertium_ht_modesdir=$(prefix)/share/apertium/modes/

apertium_ht_en_DATA=$(PREFIX1).automorf.bin \
                    $(PREFIX1).autobil.bin \
                    $(PREFIX1).autogen.bin \
                    $(PREFIX1).prob \
		    $(PREFIX1).t1x.bin \
	            modes/$(PREFIX1).mode modes.xml

install-data-local:
	mv modes modes.bak
	apertium-gen-modes modes.xml apertium-$(PREFIX1)
	rm -rf modes
	mv modes.bak modes
	test -d $(apertium_ht_modesdir) || mkdir $(apertium_ht_modesdir)
	$(INSTALL_DATA) $(PREFIX1).mode $(apertium_ht_modesdir)
	rm $(PREFIX1).mode 
	$(INSTALL_DATA) $(BASENAME).$(PREFIX1).t1x $(apertium_ht_endir)

CLEANFILES = -rf $(TARGETS_COMMON) modes