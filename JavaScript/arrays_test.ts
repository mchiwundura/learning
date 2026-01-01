import { assertEquals } from "@std/assert";
import { wordsArrayForward, wordsArrayBackward, Grades } from "./DSA/arrays.js";

Deno.test(function gradesTest() {
  let GradesObject = new Grades();
  GradesObject.add(6);
  GradesObject.add(12);
  assertEquals(GradesObject.average(), 9);
});

Deno.test(function ArrayWordTest() {
  const words = "The Quick Brown Fox Jumped Over The Lazy Dogs".split(" ");
  assertEquals(wordsArrayForward, words);
  assertEquals(wordsArrayBackward, [...words].reverse());
});
