const mongoose = require("mongoose");
const Category = require("../models/Category");
const User = require("../models/User");
const Course = require("../models/Course");
const Section = require("../models/Section");
const SubSection = require("../models/Subsection");
const Profile = require("../models/Profile");
const bcrypt = require("bcrypt");
require("dotenv").config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB Connected for Seeding");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1);
    }
};

const seedData = async () => {
    try {
        await dbConnect();

        // 0. Clean old data (optional, but good for "check everything")
        // await Category.deleteMany({});
        // await Course.deleteMany({});
        // await User.deleteMany({});
        // await Section.deleteMany({});
        // await SubSection.deleteMany({});

        // 1. Seed Categories
        const categories = [
            { name: "Web Development", description: "Learn full-stack web development." },
            { name: "Data Science", description: "Master data analysis and machine learning." },
            { name: "Mobile Development", description: "Build iOS and Android apps." },
            { name: "Python", description: "Learn Python from scratch." },
            { name: "Artificial Intelligence", description: "Dive into AI and deep learning." }
        ];

        let createdCategories = [];
        for (const cat of categories) {
            let existing = await Category.findOne({ name: cat.name });
            if (!existing) {
                existing = await Category.create(cat);
                console.log(`Category Created: ${cat.name}`);
            }
            createdCategories.push(existing);
        }

        // 2. Seed Instructor
        const hashedPassword = await bcrypt.hash("123456", 10);
        let instructor = await User.findOne({ email: "instructor@studynotion.com" });
        if (!instructor) {
            const profile = await Profile.create({
                gender: "Male",
                dateOfBirth: "1990-01-01",
                about: "I am a dummy instructor.",
                contactNumber: "9999999999",
            });
            instructor = await User.create({
                firstName: "Dummy",
                lastName: "Instructor",
                email: "instructor@studynotion.com",
                password: hashedPassword,
                accountType: "Instructor",
                additionalDetails: profile._id,
                approved: true,
                image: "https://api.dicebear.com/5.x/initials/svg?seed=Dummy%20Instructor",
            });
            console.log("Instructor Created");
        }

        // 3. Seed Student
        let student = await User.findOne({ email: "student@studynotion.com" });
        if (!student) {
            const profile = await Profile.create({
                gender: "Female",
                dateOfBirth: "1995-05-05",
                about: "I am a dummy student.",
                contactNumber: "8888888888",
            });
            student = await User.create({
                firstName: "Dummy",
                lastName: "Student",
                email: "student@studynotion.com",
                password: hashedPassword,
                accountType: "Student",
                additionalDetails: profile._id,
                approved: true,
                image: "https://api.dicebear.com/5.x/initials/svg?seed=Dummy%20Student",
            });
            console.log("Student Created");
        }

        // 4. Seed Course (Linked to Category and Instructor)
        // Web Development Course
        const webDevCat = createdCategories.find(c => c.name === "Web Development");
        let course = await Course.findOne({ courseName: "Full Stack Web Development Bootcamp" });

        if (!course && webDevCat) {
            // Create Subsections
            const sub1 = await SubSection.create({
                title: "Introduction to HTML",
                timeDuration: "10:00",
                description: "Basics of HTML5 structure.",
                videoUrl: "https://www.youtube.com/watch?v=kUMe1FH4CHE" // Dummy video
            });
            const sub2 = await SubSection.create({
                title: "CSS Flexbox",
                timeDuration: "15:00",
                description: "Mastering layout with Flexbox.",
                videoUrl: "https://www.youtube.com/watch?v=ZYb_ZG8mHg"
            });

            // Create Section
            const section = await Section.create({
                sectionName: "Frontend Basics",
                subSection: [sub1._id, sub2._id]
            });

            course = await Course.create({
                courseName: "Full Stack Web Development Bootcamp",
                courseDescription: "Become a full-stack developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!",
                instructor: instructor._id,
                whatYouWillLearn: "Everything you need to know to become a web developer.",
                price: 4999,
                thumbnail: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", // Cloudinary dummy
                tag: ["WebDev", "HTML", "CSS"],
                category: webDevCat._id,
                status: "Published",
                courseContent: [section._id],
                instructions: ["Laptop required", "Basic computer knowledge"],
            });

            // Add course to Category
            webDevCat.courses.push(course._id);
            await webDevCat.save();
            // Add course to Instructor
            instructor.courses.push(course._id);
            await instructor.save();

            console.log("Course Created: Web Development Bootcamp");
        }

        // Python Course
        const pythonCat = createdCategories.find(c => c.name === "Python");
        let pyCourse = await Course.findOne({ courseName: "Python for Data Science" });
        if (!pyCourse && pythonCat) {
            const subPy = await SubSection.create({
                title: "Python Syntax",
                timeDuration: "12:00",
                description: "Variables and Loops",
                videoUrl: "https://www.youtube.com/watch?v=_uQrJ0TkZlc"
            });
            const sectionPy = await Section.create({
                sectionName: "Getting Started",
                subSection: [subPy._id]
            });

            pyCourse = await Course.create({
                courseName: "Python for Data Science",
                courseDescription: "Learn Python for data analysis, visualization and machine learning.",
                instructor: instructor._id,
                whatYouWillLearn: "Python, Pandas, NumPy, Matplotlib",
                price: 2999,
                thumbnail: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
                tag: ["Python", "Data Science"],
                category: pythonCat._id,
                status: "Published",
                courseContent: [sectionPy._id],
                instructions: ["Python installed"],
            });

            pythonCat.courses.push(pyCourse._id);
            await pythonCat.save();
            instructor.courses.push(pyCourse._id);
            await instructor.save();
            console.log("Course Created: Python for Data Science");
        }

        console.log("Seeding Complete!");
        process.exit();

    } catch (error) {
        console.error("Seeding Error:", error);
        process.exit(1);
    }
};

seedData();
