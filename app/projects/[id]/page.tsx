import React from "react";
import Project from "./Project";

export default async function page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params; // ✅ await before accessing
  return <Project id={id} />;
}
