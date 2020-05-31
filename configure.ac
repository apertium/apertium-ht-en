AC_PREREQ(2.52)

m4_define([required_apertium_version], [3.0.0])
m4_define([required_lttoolbox_version], [3.1.2])

AC_INIT([apertium-ht-en], [0.1.0], [jimregan@users.sourceforge.net])
AM_INIT_AUTOMAKE([apertium-ht-en], [0.1.0], no-define)
AC_PROG_LN_S
AC_PROG_AWK

PKG_CHECK_MODULES(APERTIUM,   apertium >= required_apertium_version, [], [PKG_CHECK_MODULES(APERTIUM,   apertium-3.2 >= required_apertium_version)])

AP_MKINCLUDE

AC_OUTPUT([Makefile])
