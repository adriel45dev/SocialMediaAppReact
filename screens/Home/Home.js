import { StatusBar } from "expo-status-bar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import UserStory from "../../components/UserStory/UserStory";
import Title from "../../components/Title/Title";
import style from "./style";
import UserPost from "../../components/UserPost/UserPost";
import { Text, View, SafeAreaView, Pressable, FlatList } from "react-native";
import globalStyle from "../../assets/styles/main";
import { Routes } from "../../navigation/Routes";

const Home = ({ navigation }) => {
  const pageSize = 4;
  const pageSizePosts = 2;
  const data = [
    { firstName: "Josepy", id: 1 },
    { firstName: "Mary", id: 2 },
    { firstName: "Andrea", id: 3 },
    { firstName: "Jonh", id: 4 },
    { firstName: "Carlos", id: 5 },
    { firstName: "Any", id: 6 },
    { firstName: "Jully", id: 7 },
    { firstName: "Emmy", id: 8 },
    { firstName: "Adriel", id: 9 },
  ];
  const posts = [
    {
      firstName: "Adriel",
      lastName: "Alves",
      location: "Brazil",
      likes: 521,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: "John",
      lastName: "Doe",
      location: "USA",
      likes: 150,
      comments: 12,
      bookmarks: 24,
      id: 2,
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      location: "Canada",
      likes: 80,
      comments: 8,
      bookmarks: 14,
      id: 3,
    },
    {
      firstName: "Bob",
      lastName: "Smith",
      location: "UK",
      likes: 200,
      comments: 18,
      bookmarks: 32,
      id: 4,
    },
    {
      firstName: "Mary",
      lastName: "Johnson",
      location: "Australia",
      likes: 120,
      comments: 14,
      bookmarks: 22,
      id: 5,
    },
    {
      firstName: "Mike",
      lastName: "Williams",
      location: "South Africa",
      likes: 300,
      comments: 28,
      bookmarks: 44,
      id: 6,
    },
    {
      firstName: "Sarah",
      lastName: "Davis",
      location: "India",
      likes: 250,
      comments: 20,
      bookmarks: 35,
      id: 7,
    },
    {
      firstName: "Chris",
      lastName: "Miller",
      location: "Germany",
      likes: 180,
      comments: 16,
      bookmarks: 30,
      id: 8,
    },
    {
      firstName: "Kate",
      lastName: "Wilson",
      location: "France",
      likes: 140,
      comments: 12,
      bookmarks: 25,
      id: 9,
    },
    {
      firstName: "Daniel",
      lastName: "Lee",
      location: "Korea",
      likes: 220,
      comments: 19,
      bookmarks: 33,
      id: 10,
    },
    {
      firstName: "Emma",
      lastName: "Kim",
      location: "Japan",
      likes: 100,
      comments: 10,
      bookmarks: 18,
      id: 11,
    },
    {
      firstName: "Charles",
      lastName: "Garcia",
      location: "Mexico",
      likes: 170,
      comments: 15,
      bookmarks: 28,
      id: 12,
    },
    {
      firstName: "Olivia",
      lastName: "Martinez",
      location: "Spain",
      likes: 190,
      comments: 17,
      bookmarks: 31,
      id: 13,
    },
    {
      firstName: "Liam",
      lastName: "Rodriguez",
      location: "Chile",
      likes: 210,
      comments: 19,
      bookmarks: 36,
      id: 14,
    },
    {
      firstName: "Sophia",
      lastName: "Lopez",
      location: "Colombia",
      likes: 230,
      comments: 21,
      bookmarks: 39,
      id: 15,
    },
    {
      firstName: "Noah",
      lastName: "Gonzalez",
      location: "Venezuela",
      likes: 160,
      comments: 14,
      bookmarks: 27,
      id: 16,
    },
    {
      firstName: "Olivia",
      lastName: "Perez",
      location: "Peru",
      likes: 130,
      comments: 11,
      bookmarks: 23,
      id: 17,
    },
    {
      firstName: "Lucas",
      lastName: "Gomez",
      location: "Ecuador",
      likes: 240,
      comments: 22,
      bookmarks: 40,
      id: 18,
    },
    {
      firstName: "Ava",
      lastName: "Martinez",
      location: "Brazil",
      likes: 270,
      comments: 24,
      bookmarks: 46,
      id: 19,
    },
    {
      firstName: "Alexander",
      lastName: "Sanchez",
      location: "Argentina",
      likes: 290,
      comments: 26,
      bookmarks: 48,
      id: 20,
    },
    {
      firstName: "Sophia",
      lastName: "Torres",
      location: "Chile",
      likes: 110,
      comments: 10,
      bookmarks: 20,
      id: 21,
    },
  ];

  const [pageNumber, setPageNumber] = useState(1);
  const [postPageNumber, setPostPageNumber] = useState(1);
  const [loadding, setLoadding] = useState(false);
  const [loaddingPost, setLoaddingPost] = useState(false);
  const [renderData, setRenderData] = useState(data.slice(0, pageSize));
  const [renderDataPosts, setRenderDataPosts] = useState(
    posts.slice(0, pageSizePosts)
  );

  const pagiantion = (data, pageNumber, pageSize, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize;

    if (startIndex > data.length) return [];

    !posts ? setPageNumber(pageNumber) : setPostPageNumber(pageNumber);

    return data.slice(startIndex, startIndex + pageSize);
  };
  return (
    <SafeAreaView style={globalStyle.AndroidSafeArea}>
      <StatusBar backgroundColor="#366fd1" style="light" />
      {/* <ScrollView> */}

      {/* Posts -- FlatList */}
      {/* <View style={style.userPostContainer}> */}
      <FlatList
        ListHeaderComponent={() => (
          <>
            {/* Header */}
            <View style={style.header}>
              <Title title="Let's Explore"></Title>
              <Pressable style={style.messageIcon}>
                <FontAwesomeIcon icon={faEnvelope} color="#CACDDE" size={20} />
                <View style={style.messageNumberContainer}>
                  <Text style={style.messageNumber}>2</Text>
                </View>
              </Pressable>
            </View>

            {/* Stories -- FlatList  */}
            <View style={style.userStoryContainer}>
              <FlatList
                onMomentumScrollBegin={() => setLoadding(false)}
                keyExtractor={(item) => item.id.toString()}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (!loadding) {
                    setLoadding(true);
                    setRenderData((prev) => [
                      ...prev,
                      ...pagiantion(data, pageNumber + 1, pageSize),
                    ]);
                    setLoadding(false);
                  }
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={renderData}
                renderItem={({ item }) => (
                  <UserStory firstName={item.firstName} />
                )}
              />
            </View>
          </>
        )}
        keyExtractor={(item) => item.id.toString()}
        onMomentumScrollBegin={() => setLoaddingPost(false)}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (!loaddingPost) {
            setLoaddingPost(true);
            setRenderDataPosts((prev) => [
              ...prev,
              ...pagiantion(posts, postPageNumber + 1, pageSizePosts, true),
            ]);
            setLoaddingPost(false);
          }
        }}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={renderDataPosts}
        renderItem={({ item }) => (
          <View style={style.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              comments={item.comments}
              likes={item.likes}
              bookmarks={item.bookmarks}
              location={item.location}
            />
          </View>
        )}
      />
      {/* </View> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Home;
