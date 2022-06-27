const User = require("./src/routers/User");
const request = require("supertest");
const app = require("./index");

test("GET /users", function () {
    it('GET /users"', function () {
        request(app)
            .post("/users")
            .set(
                "Authorization",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6Im93bmVyIiwic3RvcmVfaWQiOm51bGwsImlhdCI6MTY1NjEwMzc2OX0.3WXz-D6i5DmxS4fizPOUj1IU3FNkSqCOqWKxwF7yog4"
            )
            .expect(200);
    });
});
test("Add /users", function () {
    it('Adding user"', function () {
        request(app)
            .post("/users")
            .set(
                "Authorization",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6Im93bmVyIiwic3RvcmVfaWQiOm51bGwsImlhdCI6MTY1NjEwMzc2OX0.3WXz-D6i5DmxS4fizPOUj1IU3FNkSqCOqWKxwF7yog4"
            )
            .send({
                username: "test",
                password: "12345",
                role: "owner",
                store_id: 1,
            })
            .expect(200);
    });
});
test("Check authorization", function () {
    it('Check authorization"', function () {
        request(app)
            .post("/login/auth")
            .set(
                "Authorization",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6Im93bmVyIiwic3RvcmVfaWQiOm51bGwsImlhdCI6MTY1NjEwMzc2OX0.3WXz-D6i5DmxS4fizPOUj1IU3FNkSqCOqWKxwF7yog4"
            )
            .expect(200);
    });
});
