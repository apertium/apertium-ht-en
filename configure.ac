#                                               -*- Autoconf -*-
# Process this file with autoconf to produce a configure script.

AC_PREREQ(2.52)

m4_define([required_apertium_version], [3.0.0])
m4_define([required_lttoolbox_version], [3.1.2])

AC_INIT([apertium-ht-en], [0.1.0], [jimregan@users.sourceforge.net])
AM_INIT_AUTOMAKE([apertium-ht-en], [0.1.0], no-define)
AC_PROG_LN_S
AC_PROG_AWK

PKG_CHECK_MODULES(APERTIUM,   apertium >= required_apertium_version, [], [PKG_CHECK_MODULES(APERTIUM,   apertium-3.2 >= required_apertium_version)])

AC_DEFUN([PKG_CHECK_LTTOOLBOX], [
  LTTOOLBOX_VER=0
  PKG_CHECK_MODULES(LTTOOLBOX, lttoolbox-3.0 >= 3.0.0,
  [
    LTTOOLBOX_VER=30
  ],
  [
    PKG_CHECK_MODULES(LTTOOLBOX, lttoolbox-3.1 >= 3.1.0,
    [
      LTTOOLBOX_VER=31
    ],
    [
      PKG_CHECK_MODULES(LTTOOLBOX, lttoolbox-3.2 >= 3.2.0)
      LTTOOLBOX_VER=32
    ])
  ])
  AC_SUBST(LTTOOLBOX_VER)

PKG_CHECK_LTTOOLBOX


AC_OUTPUT([Makefile])
