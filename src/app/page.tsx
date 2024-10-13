"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import { Circle } from "lucide-react";
import Image from "next/image";
import Starfield from "@/components/custom/starfield";

interface GitHubProfile {
  avatar_url: string;
  name: string;
  bio: string;
}

export default function Portfolio() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/gabriel-aplok");
        setProfile(response.data);
      } catch (err) {
        setError("Failed to load profile.");
        console.error("Error fetching GitHub profile:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black text-white">
      <div className="loader">Loading...</div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black text-white">
      <p>{error}</p>
      <button onClick={() => window.location.reload()} className="mt-4 bg-blue-500 text-white p-2 rounded">Retry</button>
    </div>
  );

  return (
    <>
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black" />
      <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center justify-center p-4 space-y-8">
        {profile && (
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src={profile?.avatar_url || "Profile avatar"}
                alt={`${profile?.name || "Profile name"}'s avatar`}
                width={128}
                height={128}
                loading="lazy"
                className="rounded-full border-4 border-gray-300" />
            </div>
            <h1 className="text-2xl font-bold text-gray-100">{profile?.name || "Profile name"}</h1>
            <p className="text-lg text-gray-300">{profile?.bio || "Profile bio"}</p>
          </div>
        )}
        <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-700 px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <Circle className="w-3 h-3 fill-current text-red-500" />
              <Circle className="w-3 h-3 fill-current text-yellow-500" />
              <Circle className="w-3 h-3 fill-current text-green-500" />
            </div>
            <div className="ml-4 text-sm text-gray-300">AboutMe.kt</div>
          </div>
          <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
            <code>{`class AboutMe {
    val name = "Gabriel Lima"
    val title = "Full-Stack Developer & Game Developer"
    val experience = 7 // years

    val skills = listOf(
        "Java",
        "Kotlin",
        "HTML5/CSS3/SASS",
        "PHP",
        "JavaScript",
        "TypeScript",
        "Python",
        "MySQL/PostgreSQL",
        "RESTful APIs",
        "Git",
        "Godot",
        "Android",
    )

    fun introduce() {
        println("Hello, I'm ${'$'}name, a ${'$'}title with ${'$'}experience years of experience.")
        println("My skills include:")
        skills.forEach { println("- ${'$'}it") }
    }

    fun contact() {
        val email = "contact@gabriel-aplok.com"
        val github = "https://github.com/gabriel-aplok"
        val linkedin = "https://linkedin.com/in/gabrielaplok"
        val instagram = "https://instagram.com/gabriel__yeah"
        val x = "https://x.com/GabrielAplok"
        val youtube = "https://youtube.com/GabrielAplok"

        println("Feel free to reach out!")
        println("Email: ${'$'}email")
        println("GitHub: ${'$'}github")
        println("LinkedIn: ${'$'}linkedin")
        println("Instagram: ${'$'}instagram")
        println("X: ${'$'}x")
        println("Youtube: ${'$'}youtube")
    }
}`}</code>
          </pre>
        </div>
      </div>
    </>
  );
}
